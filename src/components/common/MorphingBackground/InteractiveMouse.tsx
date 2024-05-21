"use client";

import { useEffect, useRef, useState } from "react";

import "./MorphingBackground.css";

export default function InteractiveMouse() {
  const interBubbleRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({
    curX: 0,
    curY: 0,
    tgX: 0,
    tgY: 0,
  });

  useEffect(() => {
    let animationFrameId: number;

    const move = () => {
      setPosition((prevPosition) => {
        const { curX, curY, tgX, tgY } = prevPosition;
        const newX = curX + (tgX - curX) / 20;
        const newY = curY + (tgY - curY) / 20;
        if (interBubbleRef.current) {
          interBubbleRef.current.style.transform = `translate(${Math.round(
            newX
          )}px, ${Math.round(newY)}px)`;
        }
        return { ...prevPosition, curX: newX, curY: newY };
      });

      animationFrameId = requestAnimationFrame(move);
    };

    const handleMouseMove = (event: MouseEvent) => {
      setPosition((prevPosition) => ({
        ...prevPosition,
        tgX: event.clientX,
        tgY: event.clientY,
      }));
    };

    window.addEventListener("mousemove", handleMouseMove);
    move();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <div className="interactive" ref={interBubbleRef}></div>;
}
