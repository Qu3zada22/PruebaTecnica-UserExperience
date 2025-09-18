import React from "react"

interface DepartmentData {
  department: string
  averagePerformance: number
}

interface DepartmentPerformanceChartProps {
  data: DepartmentData[]
}

const DepartmentPerformanceChart: React.FC<DepartmentPerformanceChartProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-200 w-[340px] h-[220px]">
      <h3 className="text-sm font-semibold text-gray-800 mb-3">Rendimiento por Departamento</h3>
      <div className="space-y-1 overflow-y-auto max-h-[160px]">
        {data.map((dep, idx) => (
          <div key={idx} className="flex items-center">
            <span className="w-24 text-xs font-medium text-gray-700">{dep.department}</span>
            <div className="flex-1 bg-gray-200 rounded-full h-3 ml-2 relative">
              <div
                className="bg-orange-500 h-3 rounded-full"
                style={{ width: `${dep.averagePerformance * 100}%` }}
              ></div>
              <span className="absolute right-1 top-0 text-[9px] text-white font-semibold">
                {(dep.averagePerformance * 100).toFixed(0)}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DepartmentPerformanceChart
