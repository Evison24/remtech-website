"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Using lucide-react from shadcn/ui setup
import { Button } from "@/components/ui/button"; // Assuming Button is available from shadcn/ui
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"; // Assuming Sheet is available

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  // { name: "Contact", href: "/contact" }, // Consider adding Contact if not in header/footer
];

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
          >
            {item.name}
          </Link>
        ))}
        {/* Optional: Add a CTA button for desktop nav */}
        {/* <Button asChild size="sm" className="ml-4">
          <Link href="/contact">Get a Quote</Link>
        </Button> */}
      </nav>

      {/* Mobile Navigation - Hamburger Menu */}
      <div className="md:hidden">
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col p-6 pt-12">
              {/* Close button inside */}
              {/* <SheetClose asChild className="absolute top-4 right-4">
                 <Button variant="ghost" size="icon">
                   <X className="h-6 w-6" />
                   <span className="sr-only">Close Menu</span>
                 </Button>
              </SheetClose> */}
              
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.name}> 
                    {/* Wrap Link in SheetClose to close on navigation */}
                    <Link
                      href={item.href}
                      className="text-lg font-medium text-foreground/80 transition-colors hover:text-foreground"
                      onClick={() => setIsMobileMenuOpen(false)} // Ensure menu closes
                    >
                      {item.name}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              {/* Optional: Add CTA in mobile menu */}
              {/* <Button asChild size="lg" className="mt-8">
                <Link href="/contact">Get a Quote</Link>
              </Button> */}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default Navigation;

