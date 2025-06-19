import Image from "next/image";
import React from "react";
import type { TechStackItem } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Props accepted by the TechStackCard component
interface TechStackCardProps {
  title: string;
  techArray: TechStackItem[];
}

// Reusable card component displaying a category of technologies
export function TechStackCard({ title, techArray }: TechStackCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {techArray.map((tech) => (
            <div key={tech.name} className="flex flex-row gap-2 items-center">
              <Image
                src={tech.iconPath}
                alt={tech.name}
                width={25}
                height={25}
              />
              <p className="text-center text-md">{tech.name}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
