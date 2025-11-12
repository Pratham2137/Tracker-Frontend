import { NavLink } from 'react-router-dom'
import { X, Home as HomeIcon, User, Settings, ChevronsLeft, ChevronsRight } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Sidebar({ open, onClose }) {
  // Track desktop collapse state locally, persist to localStorage
  const [collapsed, setCollapsed] = useState(() => {
    if (typeof window === 'undefined') return true
    const stored = localStorage.getItem('sidebarCollapsed')
    return stored != null ? stored === 'true' : true
  })

  // Smooth backdrop mount/unmount for fade-out animation
  const [showBackdrop, setShowBackdrop] = useState(open)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('sidebarCollapsed', String(collapsed))
    }
  }, [collapsed])

  // Handle backdrop lifecycle for smooth fade
  useEffect(() => {
    if (open) {
      setShowBackdrop(true)
    } else {
      const tid = setTimeout(() => setShowBackdrop(false), 300)
      return () => clearTimeout(tid)
    }
  }, [open])

  // Auto-close mobile sidebar on resize to desktop
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768 && open) {
        onClose()
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [open, onClose])

  return (
    <>
      {/* Backdrop for mobile inside remaining content area only (fades in/out) */}
      {showBackdrop && (
        <div
          className={`md:hidden absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      <aside
        className={`absolute md:relative inset-y-0 left-0 ${collapsed ? 'md:w-16' : 'md:w-64'} w-64 bg-background dark:bg-background-dark border-r border-border dark:border-border-dark flex flex-col shadow-lg md:shadow-none transform transition-transform md:transition-all ease-in-out duration-300 z-40 ${open ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
        aria-label="Sidebar navigation"
      >
        {/* Mobile close button */}
        <div className="flex items-center justify-between px-4 h-14 border-b border-border dark:border-border-dark md:hidden">
          {/* Logo only */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-primary text-white flex items-center justify-center font-bold">T</div>
          </div>
          <button
            className="inline-flex items-center justify-center h-10 w-10 rounded-md hover:bg-surface dark:hover:bg-surface-dark"
            onClick={onClose}
            aria-label="Close sidebar"
          >
            <X size={18} />
          </button>
        </div>

        <nav className={`flex-1 px-3 py-4 space-y-1 overflow-y-auto ${collapsed ? 'md:px-2' : ''}`}>
          <SidebarLink to="/" icon={<HomeIcon size={18} />} collapsed={collapsed}>Home</SidebarLink>
          {/* Future links */}
        </nav>

        <div className="mt-auto">
          {/* Settings link just above the collapse button */}
          <div className="px-3 py-2 border-t border-border dark:border-border-dark">
            <SidebarLink to="/settings" icon={<Settings size={18} />} collapsed={collapsed}>Settings</SidebarLink>
          </div>
          <button
            onClick={() => setCollapsed((v) => !v)}
            className={`hidden md:flex items-center w-full justify-center px-3 py-2 text-xs font-medium border-t border-border dark:border-border-dark hover:bg-surface dark:hover:bg-surface-dark transition-colors`}
            aria-label="Toggle collapse"
            title={collapsed ? 'Expand' : 'Collapse'}
          >
            {collapsed ? <ChevronsRight size={16} /> : <ChevronsLeft size={16} />}
          </button>
        </div>
      </aside>
    </>
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
