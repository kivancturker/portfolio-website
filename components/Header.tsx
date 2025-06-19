import { Logo } from "./Logo";
import { ThemeSwitch } from "./ThemeSwitch";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <Logo />
      <div className="flex items-center">
        <NavButton name="Project" path="/project" />
        <NavButton name="Blog" path="/blog" />
        <NavButton name="About" path="/about" />
        <NavButton name="Contact" path="/contact" />
        <ThemeSwitch />
      </div>
    </header>
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
