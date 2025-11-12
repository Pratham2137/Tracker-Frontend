import { Plus, Save, Calendar } from 'lucide-react'

export default function QuickActions() {
  return (
    <div className="card p-4 flex flex-wrap gap-3">
      <ActionButton icon={<Plus size={16} />} label="Add Habit" variant="primary" />
      <ActionButton icon={<Save size={16} />} label="Save Progress" />
      <ActionButton icon={<Calendar size={16} />} label="Plan Week" />
    </div>
  )
}

function ActionButton({ icon, label, variant }) {
  const base = 'inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm';
  const styles = variant === 'primary'
    ? 'bg-primary text-white hover:bg-primary-dark'
    : 'border border-border dark:border-border-dark hover:bg-surface dark:hover:bg-surface-dark';
  return (
    <button className={`${base} ${styles}`}>
      {icon}
      <span>{label}</span>
    </button>
  )
}
