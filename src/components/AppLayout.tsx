import Sidebar from "./Sidebar"
import Header from "./Header"
import type { ReactNode } from "react"

interface AppLayoutProps {
  children: ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex h-screen w-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Contenido principal */}
      <div className="flex flex-col flex-1 min-h-screen">
        <Header />

        {/* Main scrollable */}
        <main className="flex-1 overflow-auto p-4 md:p-6 w-full">{children}</main>
      </div>
    </div>
  )
}
