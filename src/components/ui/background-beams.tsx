"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "absolute top-0 left-0 w-full h-full overflow-hidden z-0", // Ensure z-index is lower than content
        className
      )}
    >
      {/* Simplified SVG structure for beams */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 800" // Adjust viewBox as needed
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient
            id="beam-gradient"
            cx="50%"
            cy="50%"
            r="50%"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="rgba(120, 119, 198, 0.2)" offset="0%" /> {/* Adjust color and opacity */}
            <stop stopColor="rgba(120, 119, 198, 0)" offset="100%" />
          </radialGradient>
        </defs>
        {/* Example Beam Path - Add more paths for desired effect */}
        <rect
          width="100%"
          height="100%"
          fill="url(#beam-gradient)"
          mask="url(#beam-mask)" // Apply mask if needed for complex shapes
        />
        {/* Add mask definition if needed */}
        {/* <mask id="beam-mask">
          <rect width="100%" height="100%" fill="white" />
          <path d="M..." fill="black" /> // Example mask path
        </mask> */}
        {/* Add animated paths here using framer-motion if desired */}
      </svg>
    </div>
  );
};

// Note: This is a simplified version based on the visual. 
// The actual Aceternity component likely involves more complex SVG paths and animations.
// You might need to copy the exact code from their source or install via CLI/manual copy.
// For full functionality, copy the component code from: https://ui.aceternity.com/components/background-beams

