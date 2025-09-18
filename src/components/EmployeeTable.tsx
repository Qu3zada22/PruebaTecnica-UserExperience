"use client"

import type React from "react"
import { Search } from "lucide-react"
import { useState, useMemo } from "react"

interface Employee {
  id: string
  name: string
  department: string
  performance: number
  status: string
}

interface EmployeeTableProps {
  data: Employee[]
}

const EmployeeTable: React.FC<EmployeeTableProps> = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredData = useMemo(() => {
    if (!searchTerm) return data
    return data.filter(
      (employee) =>
        employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.id.toLowerCase().includes(searchTerm.toLowerCase()),
    )
  }, [data, searchTerm])

  // Actualizamos los colores por estado
  const getStatusBadge = (status: string) => {
    const statusMap = {
      Bajo: "bg-[#F3D4D1] text-[#7A1914]",   // rosadito con texto oscuro
      Medio: "bg-[#EFEEAD] text-[#7A6B00]",  // amarillo con texto oscuro
      Alto: "bg-[#C5EBC2] text-[#1F4D1E]",   // verde con texto oscuro
    }
    return statusMap[status as keyof typeof statusMap] || "bg-gray-100 text-gray-800"
  }

  return (
    <div
      className="rounded-xl shadow-sm border border-gray-200 h-full flex flex-col p-4"
      style={{ backgroundColor: "#FEE5D6" }}
    >
      {/* Buscador */}
      <div
        className="flex items-center rounded-lg px-3 py-2 mb-4 border border-gray-200"
        style={{ backgroundColor: "rgba(255, 251, 249, 0.83)" }}
      >
        <Search className="w-5 h-5 text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Buscar empleado..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-transparent text-sm text-gray-600 flex-1 outline-none"
        />
      </div>

      {/* Tabla */}
      <div className="flex-1 overflow-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#FEE5D6]">
            <tr>
              <th className="px-3 py-2 text-left text-xs font-semibold text-white-600 uppercase tracking-wider">ID</th>
              <th className="px-3 py-2 text-left text-xs font-semibold text-white-600 uppercase tracking-wider">NOMBRE</th>
              <th className="px-3 py-2 text-left text-xs font-semibold text-white-600 uppercase tracking-wider">DEPARTAMENTO</th>
              <th className="px-3 py-2 text-left text-xs font-semibold text-white-600 uppercase tracking-wider">RENDIMIENTO</th>
              <th className="px-3 py-2 text-left text-xs font-semibold text-white-600 uppercase tracking-wider">ESTADO</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-[#ffffff]">
            {filteredData.map((employee, index) => (
              <tr key={index} className="hover:bg-gray-100 transition-colors duration-150">
                <td className="px-3 py-2 text-sm font-medium text-gray-900">{employee.id}</td>
                <td className="px-3 py-2 text-sm text-gray-900">{employee.name}</td>
                <td className="px-3 py-2 text-sm text-gray-700">{employee.department}</td>
                <td className="px-3 py-2 text-sm font-semibold text-gray-900">
                  {Math.round(employee.performance * 100)}%
                </td>
                <td className="px-3 py-2">
                  <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${getStatusBadge(employee.status)}`}>
                    {employee.status}
                  </span>
                </td>
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan={5} className="px-3 py-4 text-center text-sm text-gray-500">
                  No se encontraron empleados que coincidan con la búsqueda
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default EmployeeTable
