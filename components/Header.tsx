"use client";

import React from "react";
import { Logo } from "./Logo";
import { ThemeSwitch } from "./ThemeSwitch";
import Link from "next/link";
import { useMediaQuery } from "@/hooks";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { cn } from "@/lib";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { name: "Project", path: "/project" },
  { name: "Blog", path: "/blog" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export const Header = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <header className="flex justify-between items-center pt-4 mx-4 md:mx-[var(--common-margin)]">
      <Logo />
      <div className="flex items-center">
        <div className="mr-2">
          <div
            id="nav-buttons--desktop"
            className={isMobile ? "hidden" : "block"}
          >
            {navLinks.map((link) => (
              <NavButton key={link.name} name={link.name} path={link.path} />
            ))}
          </div>
          <MobileNavButton />
        </div>
        <ThemeSwitch />
      </div>
    </header>
  );
};

const HamburgerMenuButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <Button
    ref={ref}
    variant="outline"
    size="icon"
    className={cn(
      "size-8 rounded-sm flex justify-center items-center md:hidden relative",
      className
    )}
    {...props}
  >
    {/* WCAG reccommended size for buttons, but instead of increasing the size just added the span */}
    <span className="absolute size-11" />
    <Menu className="size-6" />
  </Button>
));
HamburgerMenuButton.displayName = "HamburgerMenuButton";

const MobileNavButton = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <HamburgerMenuButton />
      </SheetTrigger>
      <SheetContent>
        <SheetTitle className="text-center pt-8 text-2xl">Menu</SheetTitle>
        <div className="mt-4 flex flex-col items-center justify-start gap-y-4">
          {navLinks.map((link) => (
            <NavButton key={link.name} name={link.name} path={link.path} />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

function NavButton({ name, path }: { name: string; path: string }) {
  return (
    <Link
      href={path}
      className="text-3xlg text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-200 px-4 py-1 rounded-sm transition-colors duration-300 ease-in-out"
    >
      {name}
    </Link>
  );
}
