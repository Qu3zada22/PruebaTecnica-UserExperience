"use client"

import type React from "react"
import { Users, FolderOpen, FileText, Building, Package, Menu, X } from "lucide-react"
import { useState } from "react"

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md shadow-md border border-gray-200 bg-white dark:bg-gray-900"
      >
        <Menu className="w-5 h-5 text-gray-600 dark:!text-white" />
      </button>

      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`
          fixed lg:static inset-y-0 left-0 z-50 w-48 border-r border-gray-200 dark:border-gray-700 h-screen
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
        style={{ backgroundColor: "var(--background-color)" }} // negro en dark, blanco en claro
      >
        <button
          onClick={() => setIsOpen(false)}
          className="lg:hidden absolute top-4 right-4 p-2 text-white hover:text-gray-300"
        >
          <X className="w-5 h-5" />
        </button>

        {/* User Profile */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
              <Users className="w-4 h-4 text-gray-600 dark:!text-[#F65127]" />
            </div>
            <span className="text-sm font-medium text-gray-700 dark:!text-white">Anggie Quezada</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-6">
          <div className="px-4 mb-4">
            <h3 className="text-xs font-semibold text-gray-500 dark:!text-white -tracking-normal">Dashboards</h3>
          </div>

          <div className="space-y-1 px-2">
            <a
              href="#"
              style={{ backgroundColor: "var(--employees-highlight)" }}
              className="text-gray-900 dark:!text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              onClick={() => setIsOpen(false)}
            >
              <Users className="mr-3 h-4 w-4 text-gray-600 dark:!text-[#F65127]" />
              Employees
            </a>
            <a
              href="#"
              className="text-gray-700 dark:!text-white hover:bg-gray-100 dark:hover:bg-gray-800 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              onClick={() => setIsOpen(false)}
            >
              <FolderOpen className="mr-3 h-4 w-4 text-gray-600 dark:!text-[#F65127]" />
              Projects
            </a>
            <a
              href="#"
              className="text-gray-700 dark:!text-white hover:bg-gray-100 dark:hover:bg-gray-800 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              onClick={() => setIsOpen(false)}
            >
              <FileText className="mr-3 h-4 w-4 text-gray-600 dark:!text-[#F65127]" />
              Reportes
            </a>
          </div>

          <div className="px-4 mt-6 mb-4">
            <h3 className="text-xs font-semibold text-gray-500 dark:!text-white uppercase tracking-wider">Gestión</h3>
          </div>

          <div className="space-y-1 px-2">
            <a
              href="#"
              className="text-gray-700 dark:!text-white hover:bg-gray-100 dark:hover:bg-gray-800 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              onClick={() => setIsOpen(false)}
            >
              <Building className="mr-3 h-4 w-4 text-gray-600 dark:!text-[#F65127]" />
              Departamentos
            </a>
            <a
              href="#"
              className="text-gray-700 dark:!text-white hover:bg-gray-100 dark:hover:bg-gray-800 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              onClick={() => setIsOpen(false)}
            >
              <Package className="mr-3 h-4 w-4 text-gray-600 dark:!text-[#F65127]" />
              Bodega
            </a>
          </div>

          <div className="px-4 mt-8">
            <div className="flex justify-items-end space-x-10 text-white text-sm">
              <span>Cerrar sesión</span>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Sidebar