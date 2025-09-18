"use client"

import type React from "react"
import { Users, FolderOpen, FileText, Building, Package, Menu, X } from "lucide-react"
import { useState } from "react"

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Botón menú móvil */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md border border-gray-200"
      >
        <Menu className="w-5 h-5 text-gray-600" />
      </button>

      {/* Overlay en móvil */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed lg:static top-0 left-0 z-50 w-56 bg-white border-r border-gray-200
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Botón cerrar en móvil */}
        <button
          onClick={() => setIsOpen(false)}
          className="lg:hidden absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Perfil de usuario */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <Users className="w-4 h-4 text-gray-600" />
            </div>
            <span className="text-sm font-medium text-gray-700">Anggie Quezada</span>
          </div>
        </div>

        {/* Navegación */}
        <nav className="mt-6">
          <div className="px-4 mb-4">
            <h3 className="text-xs font-semibold text-gray-500">Dashboards</h3>
          </div>

          <div className="space-y-1 px-2">
            <a
              href="#"
              style={{ backgroundColor: "rgba(248, 108, 63, 0.26)" }}
              className="text-black group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              onClick={() => setIsOpen(false)}
            >
              <Users className="text-black mr-3 h-4 w-4" />
              Employees
            </a>
            <a
              href="#"
              className="text-gray-700 hover:bg-gray-50 hover:text-black group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              onClick={() => setIsOpen(false)}
            >
              <FolderOpen className="text-gray-400 mr-3 h-4 w-4" />
              Projects
            </a>
            <a
              href="#"
              className="text-gray-700 hover:bg-gray-50 hover:text-black group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              onClick={() => setIsOpen(false)}
            >
              <FileText className="text-gray-400 mr-3 h-4 w-4" />
              Reportes
            </a>
          </div>

          <div className="px-4 mt-6 mb-4">
            <h3 className="text-xs font-semibold text-gray-500">Gestión</h3>
          </div>

          <div className="space-y-1 px-2">
            <a
              href="#"
              className="text-gray-700 hover:bg-gray-50 hover:text-black group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              onClick={() => setIsOpen(false)}
            >
              <Building className="text-gray-400 mr-3 h-4 w-4" />
              Departamentos
            </a>
            <a
              href="#"
              className="text-gray-700 hover:bg-gray-50 hover:text-black group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              onClick={() => setIsOpen(false)}
            >
              <Package className="text-gray-400 mr-3 h-4 w-4" />
              Bodega
            </a>
          </div>

          <div className="px-4 mt-8">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Cerrar sesión</span>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Sidebar
