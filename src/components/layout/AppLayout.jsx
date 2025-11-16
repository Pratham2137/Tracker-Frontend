import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Sidebar from '@/components/layout/Sidebar'
import { Outlet } from 'react-router-dom'

export default function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false) // mobile overlay only
  return (
    <div className="min-h-screen bg-background text-text dark:bg-background-dark dark:text-text-dark transition-colors duration-500 flex flex-col">
      <Navbar />

      {/* Middle region between navbar and footer; relative for sidebar */}
      <div className="flex-1 w-full flex relative min-h-0">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="flex-1 flex flex-col items-center md:ml-0 overflow-y-auto min-h-0">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  )
}
