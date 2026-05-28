import React from "react";

const imgWheel =
  "https://www.figma.com/api/mcp/asset/be5097e3-e43b-4c0f-b7e5-cf42ca9b617f";

export default function ContactPage() {
  return (
    <div
      style={{
        backgroundColor: "#000",
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {/* CONTACT live text */}
      <h1
        style={{
          position: "absolute",
          left: "1.39%",
          top: "17.51%",
          fontFamily: '"Humane Medium", "Antonio", sans-serif',
          fontSize: "27.5vw",
          fontWeight: 900,
          lineHeight: 0.8,
          letterSpacing: "-0.01vw",
          margin: 0,
          color: "#fff",
          display: "inline-block",
          transform: "scaleX(2.67)",
          transformOrigin: "left center",
        }}
      >
        CONTACT
      </h1>

      {/* Wheel / star graphic */}
      <div
        style={{
          position: "absolute",
          left: "64.15%",
          top: "20.57%",
          width: "9.39%",
          height: "15.48%",
        }}
      >
        <img
          alt=""
          src={imgWheel}
          style={{ display: "block", width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>

      {/* LET'S TALK. text */}
      <div
        style={{
          position: "absolute",
          left: "27.97%",
          top: "60.69%",
          color: "#fff",
          fontFamily: "'Bebas Neue', sans-serif",
          whiteSpace: "nowrap",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "9.25vw",
            lineHeight: "1.357",
            letterSpacing: "0.3vw",
            textTransform: "uppercase",
          }}
        >
          LET&apos;S
        </p>
        <p
          style={{
            margin: 0,
            fontSize: "16.5vw",
            lineHeight: "0.76",
            letterSpacing: "-0.33vw",
            textTransform: "uppercase",
          }}
        >
          TALK.
        </p>
      </div>
    </div>
  );
}
