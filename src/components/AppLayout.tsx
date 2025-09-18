import Sidebar from "./Sidebar"
import Header from "./Header"
import type { ReactNode } from "react"

interface AppLayoutProps {
  children: ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex h-[100vh] w-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Contenido principal */}
      <div className="flex flex-col flex-1 min-h-0">
        {/* Header */}
        <Header />

        {/* Área scrollable */}
        <main className="flex-1 overflow-auto p-4 md:p-6 w-full min-h-0">
          {children}
        </main>
      </div>
    </div>
  )
}
