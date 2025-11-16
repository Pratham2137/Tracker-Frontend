export default function ActivityList({ items = [] }) {
  return (
    <div className="card p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-heading dark:text-heading-dark">Recent Activity</h3>
        <a href="#" className="text-sm hover:underline">View all</a>
      </div>
      <ul className="divide-y divide-border dark:divide-border-dark">
        {items.length === 0 && (
          <li className="py-6 text-sm opacity-70 text-center">No recent activity</li>
        )}
        {items.map((a, i) => (
          <li key={i} className="py-3 flex items-center justify-between">
            <div>
              <div className="text-sm">{a.text}</div>
              <div className="text-xs opacity-70">{a.time}</div>
            </div>
            <span className="text-xs px-2 py-1 rounded bg-surface dark:bg-surface-dark">{a.tag}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
