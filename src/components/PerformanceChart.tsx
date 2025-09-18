import type React from "react"

interface ChartData {
  month: string
  averagePerformance: number
}

interface PerformanceChartProps {
  data: ChartData[]
}

const PerformanceChart: React.FC<PerformanceChartProps> = ({ data }) => {
  const maxValue = Math.max(...data.map((d) => d.averagePerformance))

  // Paleta de colores
  const colors = ["#7A1914", "#981A14", "#BF1E0F", "#E72C0F", "#F65127", "#F86C3F"]

  return (
    <div className="rounded-xl p-4 shadow-sm border border-gray-200 w-full h-[240px]" style={{ backgroundColor: "#F4F4F4" }}>
      <h3 className="text-sm font-semibold text-gray-800 mb-4">Rendimiento de empleados</h3>

      <div className="flex items-end justify-between h-[140px] space-x-2">
        {data.map((item, index) => {
          const height = (item.averagePerformance / maxValue) * 100
          const barColor = colors[index % colors.length] // asigna color según índice, repite si hay más de 6

          return (
            <div key={index} className="flex flex-col items-center flex-1">
              <div className="w-full flex items-end justify-center mb-1" style={{ height: "120px" }}>
                <div
                  className="rounded-t-sm w-6 transition-all duration-300"
                  style={{ height: `${height}%`, backgroundColor: barColor }}
                ></div>
              </div>
              <span className="text-[10px] text-gray-600 text-center">{item.month}</span>
            </div>
          )
        })}
      </div>

      <div className="flex justify-between text-[10px] text-gray-500 mt-2">
        <span>0%</span>
        <span>50%</span>
        <span>100%</span>
      </div>
    </div>
  )
}

export default PerformanceChart
