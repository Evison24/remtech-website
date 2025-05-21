"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react"; // Need to install this

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = true, // Default autoplay to true as requested
  className,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
  className?: string;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000); // Autoplay interval
      return () => clearInterval(interval);
    }
  }, [autoplay, testimonials.length]); // Added dependencies

  const randomRotateY = () => {
    // Reduced rotation for a more subtle effect
    return Math.floor(Math.random() * 11) - 5; // -5 to +5 degrees
  };

  return (
    <div className={cn("mx-auto max-w-sm px-4 py-10 md:max-w-4xl md:px-8 lg:px-12", className)}>
      <div className="relative grid grid-cols-1 gap-10 md:grid-cols-2 items-center">
        {/* Image Stack */}
        <div className="relative h-64 w-full md:h-80">
          <AnimatePresence mode="sync">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.src + index} // Added index for unique key
                initial={{
                  opacity: 0,
                  scale: 0.85,
                  rotateY: randomRotateY(),
                  z: -100,
                }}
                animate={{
                  opacity: isActive(index) ? 1 : 0.5,
                  scale: isActive(index) ? 1 : 0.9,
                  rotateY: isActive(index) ? 0 : randomRotateY(),
                  z: isActive(index) ? 0 : -50 - index * 10, // Adjust z-index for stacking
                  y: isActive(index) ? 0 : 10 + index * 5, // Slight vertical offset for stack
                  zIndex: isActive(index) ? testimonials.length : testimonials.length - index,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.85,
                  rotateY: randomRotateY(),
                  z: -100,
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 origin-bottom"
                style={{ perspective: "1000px" }} // Add perspective for 3D effect
              >
                <img
                  src={testimonial.src}
                  alt={testimonial.name}
                  width={500}
                  height={500}
                  draggable={false}
                  className="h-full w-full rounded-xl object-cover object-center shadow-lg border"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Text Content and Controls */}
        <div className="flex flex-col justify-between py-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={active} // Key change triggers animation
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="mb-6"
            >
              <p className="text-lg md:text-xl font-light text-foreground/80 italic mb-4">
                &ldquo;{testimonials[active].quote}&rdquo;
              </p>
              <p className="text-base font-medium text-foreground">
                {testimonials[active].name}
              </p>
              <p className="text-sm text-foreground/60">
                {testimonials[active].designation}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-start gap-4 mt-4">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-secondary hover:bg-secondary/80 text-secondary-foreground transition-colors disabled:opacity-50"
              aria-label="Previous testimonial"
            >
              <IconArrowLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-secondary hover:bg-secondary/80 text-secondary-foreground transition-colors disabled:opacity-50"
              aria-label="Next testimonial"
            >
              <IconArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

