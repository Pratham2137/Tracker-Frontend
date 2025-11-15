import { NavLink } from 'react-router-dom'
import { Home as HomeIcon, Settings, ChevronsLeft, ChevronsRight, LogIn } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Sidebar({ open, onClose }) {
  // Track desktop collapse state locally, persist to localStorage
  const [collapsed, setCollapsed] = useState(() => {
    if (typeof window === 'undefined') return true
    const stored = localStorage.getItem('sidebarCollapsed')
    return stored != null ? stored === 'true' : true
  })

  // Track if on mobile
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    function handleResize() {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('sidebarCollapsed', String(collapsed))
    }
  }, [collapsed])

  // Mobile bottom bar navigation
  if (isMobile) {
    return (
      <nav
        className="fixed bottom-0 left-0 right-0 h-16 bg-background dark:bg-background-dark border-t border-border dark:border-border-dark flex items-center justify-around shadow-lg z-40 md:hidden"
        aria-label="Mobile navigation"
      >
        <BottomNavLink to="/" icon={<HomeIcon size={20} />}>Home</BottomNavLink>
        <BottomNavLink to="/settings" icon={<Settings size={20} />}>Settings</BottomNavLink>
      </nav>
    )
  }

  // Desktop sidebar
  return (
    <aside
      className={`${collapsed ? 'w-16' : 'w-64'} bg-background md:fixed md:top-14 md:bottom-0 md:left-0 dark:bg-background-dark border-r border-t border-border dark:border-border-dark flex flex-col shadow-none transition-all ease-in-out duration-300 z-40`}
      aria-label="Sidebar navigation"
    >
      <nav className={`flex-1 px-3 py-4 space-y-1 overflow-y-auto ${collapsed ? 'px-2' : ''}`}>
        <SidebarLink to="/" icon={<HomeIcon size={18} />} collapsed={collapsed}>Home</SidebarLink>
        <SidebarLink to="/login" icon={<LogIn size={18} />} collapsed={collapsed}>Login</SidebarLink>

        {/* Future links */}
      </nav>

      <div className="mt-auto">
        {/* Settings link just above the collapse button */}
        <div className="px-3 py-2 border-t border-border dark:border-border-dark">
          <SidebarLink to="/settings" icon={<Settings size={18} />} collapsed={collapsed}>Settings</SidebarLink>
        </div>
        <button
          onClick={() => setCollapsed((v) => !v)}
          className={`flex items-center w-full justify-center h-11 px-3 py-3 text-xs font-medium border-t border-border dark:border-border-dark hover:bg-surface dark:hover:bg-surface-dark transition-colors`}
          aria-label="Toggle collapse"
          title={collapsed ? 'Expand' : 'Collapse'}
        >
          {collapsed ? <ChevronsRight size={16} /> : <ChevronsLeft size={16} />}
        </button>
      </div>
    </aside>
  )
}

function SidebarLink({ to, children, icon, collapsed }) {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        `group flex items-center ${collapsed ? 'justify-center' : ''} gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          isActive
            ? 'bg-primary text-white shadow-sm'
            : 'text-text dark:text-text-dark hover:bg-surface dark:hover:bg-surface-dark'
        }`
      }
    >
      <span className="opacity-80 group-hover:opacity-100">{icon}</span>
      <span className={`${collapsed ? 'sr-only md:not-sr-only md:hidden' : ''}`}>{children}</span>
    </NavLink>
  )
}

function BottomNavLink({ to, children, icon }) {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        `flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-md text-xs font-medium transition-colors ${
          isActive
            ? 'text-primary'
            : 'text-text dark:text-text-dark hover:text-primary'
        }`
      }
    >
      <span>{icon}</span>
      <span>{children}</span>
    </NavLink>
  )
}
