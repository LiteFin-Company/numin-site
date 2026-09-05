import { ImageResponse } from "next/og";

export const alt = "Numin — Controle financeiro para empresas de serviços";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px",
          background: "linear-gradient(135deg, #1d6bee 0%, #1552bd 100%)",
          color: "#ffffff",
        }}
      >
        <div style={{ fontSize: 32, letterSpacing: 4, textTransform: "uppercase", opacity: 0.85 }}>
          Controle financeiro
        </div>
        <div style={{ fontSize: 150, fontWeight: 800, marginTop: 8, lineHeight: 1 }}>numin</div>
        <div style={{ fontSize: 52, marginTop: 28, maxWidth: 900 }}>
          Números que fazem sentido.
        </div>
      </div>
    ),
    { ...size }
  );
}
