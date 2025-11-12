import { TrendingUp, TrendingDown } from 'lucide-react'

export default function StatCard({ title, value, delta, positive = true, icon }) {
  return (
    <div className="card flex items-center gap-3 p-4">
      <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
        {icon}
      </div>
      <div className="flex-1">
        <div className="text-sm opacity-80">{title}</div>
        <div className="text-2xl font-semibold text-heading dark:text-heading-dark leading-tight">{value}</div>
      </div>
      <div className={`inline-flex items-center gap-1 text-sm ${positive ? 'text-success' : 'text-error'}`}>
        {positive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
        <span>{delta}</span>
      </div>
    </div>
  )
}
