"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";
import { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";

type IconName = keyof typeof dynamicIconImports;

type Props = {
  name: string;
  size?: number;
  color?: string;
};

function toKebabCase(name: string) {
  return name.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

export default function DynamicIcon({ name, size = 80, color }: Props) {
  const iconKey = toKebabCase(name) as IconName;

  const LucideIcon = useMemo(() => {
    const loader =
      dynamicIconImports[iconKey] ?? dynamicIconImports["help-circle"];

    return dynamic<LucideProps>(loader as any, { ssr: false });
  }, [iconKey]);

  return <LucideIcon size={size} color={color} />;
}
