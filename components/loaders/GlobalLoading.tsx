"use client";

import { useEffect, useState } from "react";

export default function PlayfulGlobalLoading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 bg-[#120511] flex items-center justify-center z-[9999]">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`absolute w-12 h-12 border-2 rotate-square delay-${i}`}
            />
          ))}
        </div>
      )}
    </>
  );
}
