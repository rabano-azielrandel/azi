import FloatingTechStacks from "@/components/FloatingTechStacks";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <main className="mt-8 w-full px-4 h-[700px]">
      <div className="w-full h-full max-w-[1360px] mx-auto">
        <FloatingTechStacks />
      </div>
    </main>
  );
}
