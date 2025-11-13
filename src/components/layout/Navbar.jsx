import { useEffect, useRef, useState } from "react";
import { Bell, Search, User, X } from "lucide-react";
import { Link } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileSearch, setMobileSearch] = useState(false);
  const ddRef = useRef(null);

  useEffect(() => {
    const onDoc = (e) => {
      if (ddRef.current && !ddRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  return (
    <header className="w-full sticky top-0 z-30 bg-background/80 dark:bg-background-dark/80 backdrop-blur border-b border-border dark:border-border-dark">
      <div className=" mx-auto px-4 h-14 flex justify-between items-center gap-3 ">
        {/* Left: App name */}
        <div className="flex items-center min-w-0">
          <Link
            to="/"
            className="text-lg font-bold text-heading dark:text-heading-dark hover:opacity-90 transition-opacity select-none"
          >
            Tracker
          </Link>
        </div>

        {/* Center: Search (optional, responsive) */}
        <div className="flex-1 hidden md:flex justify-center">
          <div className="w-full max-w-lg flex items-center bg-surface dark:bg-surface-dark border border-border dark:border-border-dark rounded-lg overflow-hidden">
            <div className="pl-3 text-text dark:text-text-dark">
              <Search size={18} />
            </div>
            <input
              className="flex-1 bg-transparent px-3 py-2 focus:outline-none text-text dark:text-text-dark placeholder:text-text/70 dark:placeholder:text-text-dark/70"
              placeholder="Search habits, tags or people..."
              aria-label="Search"
            />
          </div>
        </div>

        {/* Right: Notifications + Profile */}
        <div className="ml-auto flex items-center gap-2">
          {/* Mobile search toggle */}
          <button
            className="inline-flex md:hidden items-center justify-center h-10 w-10 rounded-md hover:bg-surface dark:hover:bg-surface-dark"
            onClick={() => setMobileSearch((v) => !v)}
            aria-label="Open search"
          >
            {mobileSearch ? <X size={18} /> : <Search size={18} />}
          </button>

          {/* Mobile-only theme toggle */}
          <div className="relative" ref={ddRef}>
            <button
              className="relative inline-flex items-center justify-center mr-3 h-10 w-10 rounded-md hover:bg-surface dark:hover:bg-surface-dark"
              onClick={() => setOpen((s) => !s)}
              aria-haspopup="menu"
              aria-expanded={open}
              aria-label="Notifications"
            >
              <Bell size={18} />
              <span className="absolute -top-0.5 -right-0.5 bg-error text-white text-[10px] leading-none px-1.5 py-0.5 rounded-full">
                3
              </span>
            </button>
            {open && (
              <div className="absolute right-0 mt-2 w-72 bg-surface dark:bg-surface-dark border border-border dark:border-border-dark rounded-lg shadow-lg overflow-hidden">
                <div className="px-3 py-2 text-sm border-b border-border dark:border-border-dark">
                  Notifications
                </div>
                <ul className="max-h-64 overflow-auto">
                  <li className="px-3 py-2 text-sm hover:bg-background/60 dark:hover:bg-background-dark/60 cursor-pointer">
                    You have a new follower
                  </li>
                  <li className="px-3 py-2 text-sm hover:bg-background/60 dark:hover:bg-background-dark/60 cursor-pointer">
                    Habit: Read — 1 new comment
                  </li>
                  <li className="px-3 py-2 text-sm hover:bg-background/60 dark:hover:bg-background-dark/60 cursor-pointer">
                    Weekly summary is ready
                  </li>
                </ul>
              </div>
            )}
          </div>
          <ThemeToggle variant="inline" className="w-10 h-10 mr-3 cursor-pointer" />

          <Link
            to="/profile"
            className="inline-flex items-center gap-2 h-10 px-3 rounded-md bg-primary text-white hover:bg-primary-dark"
            title="Profile"
          >
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
              <User size={16} />
            </div>
            <span className="hidden sm:inline">Profile</span>
          </Link>
        </div>
      </div>

      {/* Mobile search bar (below navbar) */}
      {mobileSearch && (
        <div className="md:hidden border-t border-border dark:border-border-dark">
          <div className="max-w-6xl mx-auto px-4 py-3">
            <div className="flex items-center bg-surface dark:bg-surface-dark border border-border dark:border-border-dark rounded-lg overflow-hidden">
              <div className="pl-3 text-text dark:text-text-dark">
                <Search size={18} />
              </div>
              <input
                className="flex-1 bg-transparent px-3 py-2 focus:outline-none text-text dark:text-text-dark placeholder:text-text/70 dark:placeholder:text-text-dark/70"
                placeholder="Search..."
                aria-label="Search"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
