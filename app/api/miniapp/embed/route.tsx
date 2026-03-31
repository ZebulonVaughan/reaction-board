import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px",
          background:
            "radial-gradient(circle at top left, rgba(34, 211, 238, 0.22), transparent 28%), radial-gradient(circle at bottom right, rgba(124, 58, 237, 0.24), transparent 24%), linear-gradient(135deg, #09111f 0%, #0f172a 55%, #111c32 100%)",
          color: "#E5E7EB",
          fontFamily: "sans-serif"
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div
            style={{
              width: 84,
              height: 84,
              borderRadius: 24,
              background: "linear-gradient(135deg, #6EE7B7, #22D3EE)",
              boxShadow: "0 0 0 1px rgba(255,255,255,0.08) inset"
            }}
          />
          <div style={{ fontSize: 28, letterSpacing: 4, textTransform: "uppercase", color: "#9fb0c8" }}>
            Base Mini App
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 82, fontWeight: 800, lineHeight: 1 }}>reaction-board</div>
          <div style={{ fontSize: 30, color: "#c9d6e6", maxWidth: 860 }}>
            Pick a reaction code, send a live signal, and keep your latest social response on Base.
          </div>
        </div>
        <div style={{ display: "flex", gap: 18 }}>
          {["01 Like", "02 Fire", "03 GM", "04 Wave"].map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "14px 22px",
                borderRadius: 999,
                border: "1px solid rgba(110, 231, 183, 0.28)",
                background: "rgba(15, 23, 42, 0.62)",
                fontSize: 24
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
