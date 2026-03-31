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
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at top, rgba(34, 211, 238, 0.16), transparent 28%), linear-gradient(180deg, #09111f 0%, #0f172a 100%)",
          color: "#E5E7EB",
          fontFamily: "sans-serif"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 22,
            padding: "40px 44px",
            borderRadius: 36,
            border: "1px solid rgba(110, 231, 183, 0.22)",
            background: "rgba(15, 23, 42, 0.78)"
          }}
        >
          <div
            style={{
              width: 140,
              height: 140,
              borderRadius: 34,
              background: "linear-gradient(135deg, #6EE7B7, #22D3EE)"
            }}
          />
          <div style={{ fontSize: 56, fontWeight: 800 }}>reaction-board</div>
          <div style={{ fontSize: 28, color: "#9fb0c8" }}>Social response console</div>
        </div>
      </div>
    ),
    { width: 200, height: 200 }
  );
}
