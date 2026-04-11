import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, phone, message } = await req.json();

    if (!name || !phone) {
      return new Response(
        JSON.stringify({ error: "Имя и телефон обязательны" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Save to database
    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const { error: dbError } = await supabaseAdmin
      .from("leads")
      .insert({ name, phone, message: message || null });

    if (dbError) {
      console.error("DB insert error:", dbError);
      return new Response(
        JSON.stringify({ error: "Ошибка сохранения заявки" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Send email via Resend
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (RESEND_API_KEY) {
      const now = new Date().toLocaleString("ru-RU", { timeZone: "Asia/Irkutsk" });
      const emailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Брус Дом 38 <onboarding@resend.dev>",
          to: ["antonvladimirovich50@gmail.com"],
          subject: `Новая заявка от ${name}`,
          html: `
            <h2>Новая заявка с сайта</h2>
            <table style="border-collapse:collapse;font-family:sans-serif;">
              <tr><td style="padding:8px;font-weight:bold;">Имя:</td><td style="padding:8px;">${name}</td></tr>
              <tr><td style="padding:8px;font-weight:bold;">Телефон:</td><td style="padding:8px;">${phone}</td></tr>
              <tr><td style="padding:8px;font-weight:bold;">Сообщение:</td><td style="padding:8px;">${message || "—"}</td></tr>
              <tr><td style="padding:8px;font-weight:bold;">Дата:</td><td style="padding:8px;">${now}</td></tr>
            </table>
          `,
        }),
      });

      if (!emailRes.ok) {
        const errBody = await emailRes.text();
        console.error("Resend error:", emailRes.status, errBody);
        // Don't fail the request — lead is saved, email is secondary
      }
    } else {
      console.warn("RESEND_API_KEY not set, skipping email notification");
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Unexpected error:", err);
    return new Response(
      JSON.stringify({ error: "Внутренняя ошибка сервера" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
