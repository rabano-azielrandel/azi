"use client";

import { useState, ReactNode, createContext, useContext } from "react";
import { Particles } from "@/components/ui/shadcn-io/particles";

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
};

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <Particles
        className={`fixed top-0 left-0 inset-0 w-full h-full ${
          isDarkMode
            ? ""
            : "bg-gradient-to-b from-[#F5F5F5] via-[#F7F7F7] to-[#F7F7F7]"
        }`}
        quantity={100}
        ease={80}
        staticity={50}
        color={` ${isDarkMode ? "#FFFFFF" : "#4B5563"}`}
        size={0.8}
      />
      {children}
    </ThemeContext.Provider>
  );
}
