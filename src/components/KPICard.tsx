import { Users, Target, Award, AlertTriangle } from "lucide-react"

interface KPICardProps {
  title: string
  value: string | number
  subtitle: string
  trend: string
  type: "total" | "average" | "high" | "low"
}

const iconMap = {
  total: Users,
  average: Target,
  high: Award,
  low: AlertTriangle,
}

export default function KPICard({ title, value, subtitle, trend, type }: KPICardProps) {
  const Icon = iconMap[type]

  return (
    <div
      className="rounded-xl shadow-md p-4 flex flex-col justify-between"
      style={{
        width: "220px",
        height: "126px",
        backgroundColor: "rgba(246, 81, 39, 0.84)", 
      }}
    >
      {/* Encabezado con icono */}
      <div className="flex items-start justify-between">
        <h3 className="text-sm font-medium text-black text-left">{title}</h3>
        <Icon className="w-6 h-6 mt-1 text-[#002440]" />
      </div>

      {/* Valor principal */}
      <div className="text-2xl font-bold text-black text-left mt-2">{value}</div>

      {/* Subtexto */}
      <div className="mt-1 text-left">
        <p className="text-xs text-white">{trend}</p>
        <p className="text-[11px] opacity-90 text-white">{subtitle}</p>
      </div>
    </div>
  )
}
