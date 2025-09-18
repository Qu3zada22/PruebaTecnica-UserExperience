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
      className="rounded-xl shadow-md p-2 flex flex-col justify-between"
      style={{
        width: "240px",
        height: "140px",
        backgroundColor: "rgba(246, 81, 39, 0.84)", // F65127 con 84% de opacidad
      }}
    >
      {/* Encabezado con icono */}
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-black">{title}</h3>
        <Icon className="w-25 h-10 mt-2 text-[#002440]" />
      </div>

      {/* Valor principal */}
      <div className="text-2xl font-bold text-black">{value}</div>

      {/* Subtexto */}
      <div className="mt-1">
        <p className="text-xs text-white">{trend}</p>
        <p className="text-[11px] opacity-90 text-white">{subtitle}</p>
      </div>
    </div>
  )
}
