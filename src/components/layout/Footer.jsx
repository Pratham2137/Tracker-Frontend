import ThemeToggle from '@/components/ThemeToggle'

export default function Footer() {
  return (
    <footer className="mt-auto w-full border-t h-11 border-border dark:border-border-dark bg-background/90 dark:bg-background-dark/90">
      <div className="max-w-6xl mx-auto px-4 py-3 h-full text-sm gap-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-center sm:text-left">
          <span>© {new Date().getFullYear()} Tracker</span>
          <span className="opacity-60 hidden sm:inline">•</span>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Help</a>
        </div>
        
      </div>
    </footer>
  )
}
