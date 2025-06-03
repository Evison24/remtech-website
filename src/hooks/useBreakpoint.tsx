import { useEffect, useState } from "react";

function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState<"sm" | "md" | "lg" | "xl">("lg");

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      if (width < 800) setBreakpoint("sm");
      else if (width < 800) setBreakpoint("md");
      else if (width < 1200) setBreakpoint("md");
      else setBreakpoint("xl");
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return breakpoint;
}
export default useBreakpoint;
