"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/assets/kba logo.png";
import logo2 from "@/assets/logo 2.png";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  { name: "Pricing", href: "/pricing" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-50 transition-all duration-300 max-w-7xl mx-auto ${
        scrolled
          ? "bg-background/95 shadow-lg backdrop-blur-md top-5 left-0 right-0 rounded-full"
          : "bg-transparent top-0  left-0 right-0"
      }`}
    >
      <nav className="flex h-16 items-center justify-between max-w-7xl mx-auto px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 h-auto w-28">
          <Image
            src={scrolled ? logo2 : logo}
            alt="Logo"
            width={100}
            height={100}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-xl font-medium transition-colors pb-1
              after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 
              ${scrolled ? "after:bg-primary" : "after:bg-white"}
              after:transition-transform after:duration-300 after:origin-right
              ${
                isActive
                  ? scrolled
                    ? "text-gray-600 after:scale-x-100"
                    : "text-gray-400 after:scale-x-100"
                  : scrolled
                  ? "text-black hover:text-gray-400 after:scale-x-0 hover:after:scale-x-100"
                  : "text-white hover:text-gray-400 after:scale-x-0 hover:after:scale-x-100"
              }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex md:items-center md:gap-4">
          <Button
            variant={scrolled ? "default" : "outline"}
            className={`${scrolled ? "" : "bg-transparent text-white"}`}
          >
            Book an Appointment
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu
                className={`h-5 w-5 ${scrolled ? "text-black" : "text-white"}`}
              />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] px-6">
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <div className="flex flex-col gap-6 mt-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`relative text-lg font-medium transition-colors pb-1
                after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary
                after:transition-transform after:duration-300 after:origin-right
                ${
                  pathname === item.href
                    ? "text-foreground after:scale-x-100"
                    : "text-muted-foreground hover:text-foreground after:scale-x-0 hover:after:scale-x-100"
                }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t">
                <Button className="w-full">Book an Appointment</Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
