// src/animation/ScrollAnimation.tsx
import React from "react";
import type { ReactNode } from "react";
import { useScrollAnimation } from "./useScrollAnimation";

interface ScrollAnimationProps {
  children: ReactNode;
  delay?: number;
  threshold?: number;
  once?: boolean;
  direction?: "up" | "down" | "left" | "right";
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  delay = 0,
  threshold = 0.1,
  once = true,
  direction = "up",
}) => {
  const { ref, isInView } = useScrollAnimation({ threshold, once });

  // Determine motion direction (translate offset)
  const directionStyles: Record<string, string> = {
    up: "translate-y-8",
    down: "-translate-y-8",
    left: "translate-x-8",
    right: "-translate-x-8",
  };
  
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out transform
        ${isInView ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${directionStyles[direction]}`}
      `}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;