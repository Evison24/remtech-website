import React from "react";
import Navigation from "./Navigation"; // Assuming Navigation component exists

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 h-14">
      <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
        <Navigation />
        {/* Add CTA button or other elements if needed */}
      </div>
    </header>
  );
};

export default Header;
