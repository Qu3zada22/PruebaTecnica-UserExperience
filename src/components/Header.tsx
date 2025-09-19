"use client"

import type React from "react"
import { Search, Sun, Moon, Bell } from "lucide-react"
import { useState, useEffect } from "react"

const Header: React.FC = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setIsDark(savedTheme === "dark")
    } else {
      setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches)
    }
  }, [])

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <header
      className="border-b border-gray-200 px-4 sm:px-6 md:px-8 py-4"
      style={{
        backgroundColor: "var(--header-bg)",
        color: "var(--header-text)",
      }}
    >
      <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
        <nav className="flex items-center space-x-2 text-sm truncate" style={{ color: "var(--header-text)" }}>
          <span className="hidden sm:inline">Dashboards</span>
          <span className="hidden sm:inline">/</span>
          <span className="font-medium truncate">Dashboard de Rendimiento</span>
        </nav>

        <div className="flex items-center space-x-2 md:space-x-4 w-full sm:w-auto">
          <div className="relative hidden md:block flex-1 max-w-xs md:max-w-md">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
              style={{ color: "var(--header-text)" }}
            />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent w-full"
              style={{
                backgroundColor: "var(--background-color)",
                color: "var(--text-color)",
                borderColor: "var(--kpi-bg)",
              }}
            />
          </div>

          <button className="md:hidden p-2" style={{ color: "var(--header-text)" }}>
            <Search className="w-5 h-5" />
          </button>

          <button onClick={toggleTheme} className="p-2" style={{ color: "var(--header-text)" }}>
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button className="p-2" style={{ color: "var(--header-text)" }}>
            <Bell className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header