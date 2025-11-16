import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react"; // lightweight React icons

export default function ThemeToggle({ variant = "floating", className = "" }) {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  // ✅ Apply theme on mount
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // ✅ Toggle theme
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const base = "flex items-center justify-center w-11 h-11 rounded-full bg-surface dark:bg-surface-dark text-heading dark:text-heading-dark shadow-md transition-transform duration-300";
  const pos = variant === "floating" ? "fixed bottom-6 right-6 hover:scale-105" : "hover:opacity-90";

  return (
    <button
      onClick={toggleTheme}
      className={`${base} ${pos} ${className}`}
      aria-label="Toggle Dark Mode"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-yellow-400 transition-transform duration-300" />
      ) : (
        <Moon className="w-5 h-5 text-slate-700 transition-transform duration-300" />
      )}
    </button>
  );
}
