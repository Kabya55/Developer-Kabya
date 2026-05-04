"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CursorFollower() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const onMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      });
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
      });
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="hidden md:block fixed top-0 left-0 w-2 h-2 bg-azure-highlight rounded-full pointer-events-none z-[9999] mix-blend-difference"
      />
      <div
        ref={followerRef}
        className="hidden md:block fixed top-0 left-0 w-8 h-8 border border-azure-highlight/30 rounded-full pointer-events-none z-[9998] transition-transform duration-300 ease-out mix-blend-difference"
      />
    </>
  );
}
