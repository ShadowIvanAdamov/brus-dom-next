import { ImageResponse } from "next/og";

export const size = { width: 120, height: 120 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#8B5A3C",
          borderRadius: "20px",
        }}
      >
        <svg viewBox="0 0 64 64" width="90" height="90">
          <path
            d="M32 12 L10 30 L16 30 L16 50 L28 50 L28 38 L36 38 L36 50 L48 50 L48 30 L54 30 Z"
            fill="#F5F0E8"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
