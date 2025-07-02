

"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Import usePathname
import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js
import SidebarContent from "../SidebarContent/page";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get the current route

  // Close sidebar when the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scrolling when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <header className="bg-app max-w-[1920px] mx-auto md:-mt-2 xl:-mt-0">
      <div className=" flex items-center justify-between px-4 md:pl-2 2xl:pl-6   md:pr-8 2xl:pr-12 max-2xl:py-2">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/headerIcon/logo.svg"
            alt="Logo"
            width={200} // Adjust width as needed
            height={50} // Adjust height as needed
            className=" cursor-pointer 2xl:w-[280px] 2xl:h-[120px] object-contain "
          />
        </Link>

        {/* Hamburger Menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none flex items-center"
          style={{ fontFamily: "  'Afacad Flux', sans-serif" }}
        >
          {" "}
          <span className="hidden [@media(min-width:400px)]:block txt-22 mr-2 sm:mr-3 md:mr-4 font-medium">
            Menu
          </span>
          <Image
            src="/headerIcon/hamBurger.png"
            alt="Menu"
            width={50}
            height={50}
            className="cursor-pointer [@media(min-width:1600px)]:w-[70px] [@media(min-width:1600px)]:h-[70px]"
          />
        </button>
      </div>

      {/* Full-Screen Sidebar */}
      <SidebarContent isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}