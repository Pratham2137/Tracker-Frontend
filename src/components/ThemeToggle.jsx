import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({ variant = "floating", className = "" }) {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme") || "light";
    } catch (e) {
      return "light";
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {}
  }, [theme]);

  const handleToggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  const isDark = theme === "dark";

  const floatingPos = variant === "floating" ? "fixed bottom-6 right-6 z-50" : "";

  return (
    <div className={`${floatingPos} ${className}`}>
      <label className="inline-flex items-center cursor-pointer" title="Toggle theme">
        {/* visually-hidden checkbox for accessibility */}
        <input
          type="checkbox"
          role="switch"
          aria-checked={isDark}
          className="sr-only"
          checked={isDark}
          onChange={handleToggle}
        />

        {/* Track */}
        <div
          className={`relative w-16 h-9 rounded-full transition-colors duration-300 flex items-center px-1 ${
            isDark
              ? 'bg-primary/10 border border-primary dark:bg-primary/20'
              : 'bg-surface dark:bg-surface-dark border border-border dark:border-border-dark'
          }`}
        >
          {/* Sun icon on left */}
          {/* <span className="absolute left-2 text-yellow-400 opacity-90">
            <Sun size={14} />
          </span> */}

          {/* Moon icon on right */}
          {/* <span className="absolute right-2 text-slate-600 dark:text-text-dark opacity-90">
            <Moon size={14} />
          </span> */}

          {/* Thumb */}
          <span
            className={`relative flex items-center justify-center w-7 h-7 bg-white dark:bg-background-dark rounded-full shadow transform transition-transform duration-300 ${
              isDark ? 'translate-x-6' : 'translate-x-0'
            } `}
            aria-hidden
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-primary" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700 dark:text-text-dark" />
            )}
          </span>
        </div>
      </label>
    </div>
  );
}
