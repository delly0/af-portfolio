import React, { useEffect, useState } from "react";

interface GlowCursorProps {
  isDay: boolean;
}

const GlowCursor: React.FC<GlowCursorProps> = ({ isDay }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);


  const backgroundColor = isDay
    ? "rgba(255, 255, 150, 0.3)"  // pale yellow with some transparency
    : "rgba(59, 130, 246, 0.2)"; // blue-400/20

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 80,
        height: 80,
        borderRadius: "50%",
        backgroundColor,
        filter: "blur(16px)",
        pointerEvents: "none",
        zIndex: 9999,
        transform: `translate(${pos.x - 40}px, ${pos.y - 40}px)`,
        transition: "transform 75ms linear",
      }}
    />
  );
};

export default GlowCursor;