"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Share, Check } from "lucide-react";

export function ShareButton() {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
    }
  }

  return (
    <Button size="sm" onClick={handleShare} className="flex items-center gap-2">
      {copied ? (
        <>
          <Check className="h-4 w-4" />
          Link copied!
        </>
      ) : (
        <>
          <Share className="h-4 w-4" />
          Share
        </>
      )}
    </Button>
  );
}
