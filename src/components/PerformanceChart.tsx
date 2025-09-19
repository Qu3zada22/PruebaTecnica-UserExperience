import React from "react"

interface ChartData {
  month: string
  averagePerformance: number
}

interface PerformanceChartProps {
  data: ChartData[]
}

const PerformanceChart: React.FC<PerformanceChartProps> = ({ data }) => {
  const maxValue = Math.max(...data.map((d) => d.averagePerformance))

  // Colores para modo claro (naranjas) usando variables CSS
  const lightColors = [
    "var(--graph-color-1)",
    "var(--graph-color-2)",
    "var(--graph-color-3)",
    "var(--graph-color-4)",
    "var(--graph-color-5)",
    "var(--graph-color-6)",
  ]

  // Colores para modo oscuro (azules) usando variables CSS
  const darkColors = [
    "var(--graph-color-1)",
    "var(--graph-color-2)",
    "var(--graph-color-3)",
    "var(--graph-color-4)",
  ]

  // Detectar si la clase "dark" está en <html>
  const [isDark, setIsDark] = React.useState(false)

  React.useEffect(() => {
    const checkDark = () => setIsDark(document.documentElement.classList.contains("dark"))
    checkDark()

    // Observar cambios en la clase para actualizar estado
    const observer = new MutationObserver(() => checkDark())
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })

    return () => observer.disconnect()
  }, [])

  return (
    <div
      className="rounded-xl p-4 shadow-sm border w-full h-[240px] sm:h-[200px]"
      style={{
        backgroundColor: "var(--background-color)",
        borderColor: isDark ? "#444" : "#ccc",
      }}
    >
      <h3
        className="text-sm font-semibold mb-4"
        style={{ color: "var(--text-color)" }}
      >
        Rendimiento de empleados
      </h3>

      <div className="flex items-end justify-between h-[140px] space-x-2">
        {data.map((item, index) => {
          const height = (item.averagePerformance / maxValue) * 100
          const barColor = isDark
            ? darkColors[index % darkColors.length]
            : lightColors[index % lightColors.length]

          return (
            <div key={index} className="flex flex-col items-center flex-1 min-w-[24px]">
              <div
                className="w-full flex items-end justify-center mb-1"
                style={{ height: "120px" }}
              >
                <div
                  className="rounded-t-sm w-6 transition-all duration-300"
                  style={{ height: `${height}%`, backgroundColor: barColor }}
                />
              </div>
              <span
                className="text-[10px] text-center"
                style={{ color: "var(--text-color)" }}
              >
                {item.month}
              </span>
            </div>
          )
        })}
      </div>

      <div
        className="flex justify-between text-[10px] mt-2"
        style={{ color: "var(--text-color)" }}
      >
        <span>0%</span>
        <span>50%</span>
        <span>100%</span>
      </div>
    </div>
  )
}

export default PerformanceChart