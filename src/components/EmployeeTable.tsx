"use client"

import React, { useState, useMemo } from "react"
import { Search } from "lucide-react"

interface Employee {
  id: string
  name: string
  department: string
  performance: number 
}

interface EmployeeTableProps {
  data: Employee[]
}

const EmployeeTable: React.FC<EmployeeTableProps> = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredData = useMemo(() => {
    if (!searchTerm) return data
    const q = searchTerm.toLowerCase()
    return data.filter(
      (e) =>
        e.name.toLowerCase().includes(q) ||
        e.department.toLowerCase().includes(q) ||
        e.id.toLowerCase().includes(q),
    )
  }, [data, searchTerm])

  const badgeFromPerformance = (perf: number) => {
    const pct = Math.round(perf * 100)
    if (pct >= 80) {
      return {
        cls: "bg-green-200 text-green-800 dark:bg-green-700 dark:text-green-200",
        label: "Alto",
        pct,
      }
    }
    if (pct >= 60) {
      return {
        cls: "bg-yellow-200 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-200",
        label: "Medio",
        pct,
      }
    }
    return {
      cls: "bg-red-200 text-red-800 dark:bg-red-700 dark:text-red-200",
      label: "Bajo",
      pct,
    }
  }

  return (
    <div
      className="rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col w-full max-w-4xl max-h-[600px] min-w-[280px] h-[60vh] overflow-x-auto"
      style={{ backgroundColor: "var(--table-bg)", color: "var(--text-color)" }}
    >
      {/* Buscador */}
      <div className="flex items-center mb-4">
        <Search className="w-4 h-4 mr-2 flex-shrink-0" style={{ color: "var(--text-color)" }} />
        <input
          type="text"
          placeholder="Buscar empleado..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 text-sm px-3 py-2 border border-gray-200 rounded-lg bg-[rgba(255,251,249,0.83)] dark:bg-[rgba(62,75,107,0.83)] outline-none"
          style={{ color: "var(--text-color)" }}
        />
      </div>

      {/* Tabla */}
      <div className="flex-1 overflow-auto">
        <table className="table-auto min-w-full border-collapse" style={{ color: "var(--text-color)" }}>
          <thead>
            <tr>
              <th className="px-2 py-2 text-left text-xs font-semibold uppercase" style={{ color: "var(--text-color)" }}>ID</th>
              <th className="px-2 py-2 text-left text-xs font-semibold uppercase" style={{ color: "var(--text-color)" }}>Nombre</th>
              <th className="px-2 py-2 text-left text-xs font-semibold uppercase" style={{ color: "var(--text-color)" }}>Departamento</th>
              <th className="px-2 py-2 text-left text-xs font-semibold uppercase" style={{ color: "var(--text-color)" }}>Rendimiento</th>
              <th className="px-2 py-2 text-left text-xs font-semibold uppercase" style={{ color: "var(--text-color)" }}>Estado</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((employee, idx) => {
              const badge = badgeFromPerformance(employee.performance)
              return (
                <tr key={employee.id ?? idx} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                  <td className="px-2 py-2 text-sm font-medium" style={{ color: "var(--text-color)" }}>{employee.id}</td>
                  <td className="px-2 py-2 text-sm" style={{ color: "var(--text-color)" }}>{employee.name}</td>
                  <td className="px-2 py-2 text-sm" style={{ color: "var(--text-color)" }}>{employee.department}</td>
                  <td className="px-2 py-2 text-sm font-semibold" style={{ color: "var(--text-color)" }}>
                    {Math.round(employee.performance * 100)}%
                  </td>
                  <td className="px-2 py-2">
                    <span
                      className={`inline-flex items-center justify-center px-3 py-1 text-xs font-medium rounded-full ${badge.cls}`}
                      title={`${badge.pct}%`}
                    >
                      {badge.label}
                    </span>
                  </td>
                </tr>
              )
            })}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan={5} className="px-3 py-4 text-center text-sm" style={{ color: "var(--text-color)" }}>
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