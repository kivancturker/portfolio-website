import Image from "next/image";
import React from "react";
import type { TechStackItem } from "@/types";

// Props accepted by the TechStackCard component
interface TechStackCardProps {
  title: string;
  techArray: TechStackItem[];
}

// Reusable card component displaying a category of technologies
export function TechStackCard({ title, techArray }: TechStackCardProps) {
  return (
    <div className="bg-gray-200 dark:bg-gray-800 rounded-md p-4">
      <h3 className="text-center text-xl font-bold mb-6">{title}</h3>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {techArray.map((tech) => (
          <div key={tech.name} className="flex flex-row gap-2 items-center">
            <Image src={tech.iconPath} alt={tech.name} width={25} height={25} />
            <p className="text-center text-md">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
