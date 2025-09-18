import KPICard from "../components/KPICard"
import PerformanceChart from "../components/PerformanceChart"
import EmployeeTable from "../components/EmployeeTable"

import AppLayout from "../components/AppLayout"
import dashboardData from "../data/employeesData.json"

interface Employee {
  id: string
  name: string
  department: string
  performance: number
  status: string
}

function DashboardPage() {
  const { indicatorsData, graphData, tableData: rawTableData } = dashboardData
  const tableData: Employee[] = rawTableData


  return (

    
    <AppLayout>
      {/* KPIs */}
        <div className="flex flex-wrap gap-4 mb-6">
        <KPICard
            title="Total de empleados"
            value={indicatorsData.totalEmployees}
            subtitle="Empleados activos en la organización"
            trend="+5% vs el mes pasado"
            type="total"
        />
        <KPICard
            title="Rendimiento promedio"
            value={`${Math.round(indicatorsData.averagePerformance * 100)}%`}
            subtitle="Rendimiento general del equipo"
            trend="+3% vs el mes pasado"
            type="average"
        />
        <KPICard
            title="Alto rendimiento"
            value={indicatorsData.highPerformers}
            subtitle="Empleados con rendimiento superior"
            trend="+8% vs el mes pasado"
            type="high"
        />
        <KPICard
            title="Bajo rendimiento"
            value={indicatorsData.lowPerformers}
            subtitle="Empleados que necesitan apoyo"
            trend="-2% vs el mes pasado"
            type="low"
        />
</div>

      {/* Contenido principal: gráficas + tabla */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Columna izquierda: gráficas */}
        <div className="flex flex-col gap-6 w-full lg:w-[360px]">
          <PerformanceChart data={graphData} />
        </div>

        {/* Columna derecha: tabla */}
        <div className="flex-1 min-w-0">
          <EmployeeTable data={tableData} />
        </div>
      </div>
    </AppLayout>
  )
}

export default DashboardPage
