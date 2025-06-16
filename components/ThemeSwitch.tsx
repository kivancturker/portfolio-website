"use client";

import { IconButton } from "@radix-ui/themes";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export const ThemeSwitch = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // useEffect only runs on the client, so now we can safely show the UI
  if (!mounted) {
    return null;
  }

  return <ThemeButton theme={theme} setTheme={setTheme} />;
};

function ThemeButton({
  theme,
  setTheme,
}: {
  theme: string | undefined;
  setTheme: (theme: string) => void;
}) {
  return (
    <IconButton
      size="1"
      variant="ghost"
      color="gray"
      className="transition-colors duration-300 ease-in-out"
      style={{
        width: "32px",
        height: "var(--base-button-height)",
        minWidth: "32px",
        minHeight: "var(--base-button-height)",
      }}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? <Sun /> : <Moon />}
    </IconButton>
  );
}
