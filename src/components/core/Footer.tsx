import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Logo & About */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              {/* Re-use logo or simplified version */}
              <span className="font-bold text-lg">Remtech Labs</span>
            </Link>
            <p className="text-sm text-foreground/60">
              Empowering businesses with breakthrough AI, mobile, and custom
              application solutions.
            </p>
          </div>

          {/* Column 2: Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-sm font-semibold text-foreground mb-4 -ml-[15px]">
              Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-foreground/60 hover:text-foreground"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-foreground/60 hover:text-foreground"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-foreground/60 hover:text-foreground"
                >
                  Services
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/blog"
                  className="text-sm text-foreground/60 hover:text-foreground"
                >
                  Blog
                </Link>
              </li> */}
              {/* Add links to individual services if desired */}
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-foreground/60 hover:text-foreground"
                >
                  Contact
                </Link>
              </li>{" "}
              {/* Assuming a contact page */}
            </ul>
          </div>

          {/* Column 3: Contact Info / Social */}
          <div className="flex flex-col  items-center">
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Contact Us
            </h3>
            <p className="text-sm text-foreground/60 mb-2">
              info@remtechlabs.com
            </p>{" "}
            {/* Placeholder */}
            <p className="text-sm text-foreground/60">+1 234 567 890</p>{" "}
            {/* Placeholder */}
            {/* Add Social Media Icons here */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-foreground/60">
          © {currentYear} Remtech Labs. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
