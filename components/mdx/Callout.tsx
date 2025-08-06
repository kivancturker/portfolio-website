import { cn } from "@/lib";
import { Info, AlertTriangle, CheckCircle } from "lucide-react";

const variants = {
  info: "border-blue-400 bg-blue-50 dark:bg-blue-950/50 text-blue-900 dark:text-blue-100",
  warning:
    "border-yellow-400 bg-yellow-50 dark:bg-yellow-950/50 text-yellow-900 dark:text-yellow-100",
  success:
    "border-green-400 bg-green-50 dark:bg-green-950/50 text-green-900 dark:text-green-100",
};

const icons = {
  info: Info,
  warning: AlertTriangle,
  success: CheckCircle,
};

export function Callout({
  children,
  variant = "info",
}: React.PropsWithChildren<{ variant?: keyof typeof variants }>) {
  const Icon = icons[variant];
  return (
    <div
      className={cn("flex gap-3 rounded-md border p-4 my-4", variants[variant])}
    >
      <Icon className="mt-1 shrink-0 h-5 w-5" />
      <div className="flex-1">{children}</div>
    </div>
  );
}
