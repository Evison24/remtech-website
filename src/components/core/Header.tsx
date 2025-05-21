import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from './Navigation'; // Assuming Navigation component exists

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image src="/images/logo.svg" alt="Remtech Labs Logo" width={100} height={40} />
            {/* <span className="font-bold sm:inline-block">Remtech Labs</span> */}
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <Navigation />
          {/* Add CTA button or other elements if needed */}
        </div>
      </div>
    </header>
  );
};

export default Header;

