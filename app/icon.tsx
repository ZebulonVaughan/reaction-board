import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512
};
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
          background:
            "radial-gradient(circle at top, rgba(34, 211, 238, 0.2), transparent 30%), linear-gradient(135deg, #09111f 0%, #0f172a 60%, #111c32 100%)"
        }}
      >
        <div
          style={{
            display: "flex",
            width: 320,
            height: 320,
            borderRadius: 84,
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #6EE7B7, #22D3EE)",
            color: "#08121f",
            fontSize: 138,
            fontWeight: 800,
            fontFamily: "sans-serif"
          }}
        >
          RB
        </div>
      </div>
    ),
    size
  );
}
