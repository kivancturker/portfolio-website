"use client";

import { Button } from "@/components/ui/button";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useMounted } from "@/hooks/use-mounted";

export const ThemeSwitch = () => {
  const mounted = useMounted();
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI.
  // This is a workaround to avoid hydration errors.
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
    <Button
      variant="ghost"
      size="icon"
      className="size-8 rounded-sm transition-colors duration-300 ease-in-out"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <Sun className="text-[var(--color-primary)]" />
      ) : (
        <Moon className="text-[var(--color-primary)]" />
      )}
    </Button>
  );
}
