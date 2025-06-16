import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="text-2xl font-bold text-gray-600 dark:text-gray-300 transition-colors duration-300 ease-in-out"
    >
      Kivanc Turker
    </Link>
  );
};
