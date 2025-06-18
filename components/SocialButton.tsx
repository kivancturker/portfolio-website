import React from "react";

interface SocialButtonProps {
  icon: React.ReactNode;
  alt: string;
  url: string;
}

export const SocialButton = ({ icon, alt, url }: SocialButtonProps) => {
  return (
    <a
      className="border border-gray-300 dark:border-gray-600 rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105 hover:cursor-pointer transition-all duration-300 ease-in-out"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={alt}
    >
      {icon}
    </a>
  );
};
