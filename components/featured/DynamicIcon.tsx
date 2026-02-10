"use client";
import dynamic from "next/dynamic";
import { useMemo, ComponentType } from "react";
import { LucideProps } from "lucide-react"; // Import the correct type

type Props = {
  name: string;
  size?: number;
  color?: string;
};

export default function DynamicIcon({ name, size = 80, color }: Props) {
  const iconName = name.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

  const LucideIcon = useMemo(
    () =>
      dynamic<LucideProps>(() =>
        // Tell dynamic to expect LucideProps
        import(`lucide-react/dist/esm/icons/${iconName}.js`).then(
          (mod) => mod.default,
        ),
      ),
    [iconName],
  );

  return <LucideIcon size={size} color={color} />;
}
