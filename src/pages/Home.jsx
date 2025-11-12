import { CalendarCheck2, Timer, CheckCircle2 } from 'lucide-react'
import StatCard from '@/components/home/StatCard'
import QuickActions from '@/components/home/QuickActions'
import ActivityList from '@/components/home/ActivityList'

export default function Home() {
  const activity = [
    { text: 'Completed "Read 20 pages"', time: '2h ago', tag: 'Habit' },
    { text: 'Logged water intake', time: '4h ago', tag: 'Health' },
    { text: 'Weekly summary generated', time: 'Yesterday', tag: 'Report' },
  ]

  return (
    <div className="w-full px-4 pt-6 pb-10 max-w-6xl">
      {/* Hero */}
      <section className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-semibold text-heading dark:text-heading-dark">Welcome back, Pratham</h1>
        <p className="mt-1 text-sm sm:text-base opacity-80">Here’s a quick look at your progress and what’s next.</p>
      </section>

      {/* Stats grid */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard title="Habits completed" value="4/6" delta="+1" positive icon={<CheckCircle2 size={18} />} />
        <StatCard title="Focus time" value="2h 30m" delta="+15m" positive icon={<Timer size={18} />} />
        <StatCard title="Streak" value="7 days" delta="-1" positive={false} icon={<CalendarCheck2 size={18} />} />
      </section>

      {/* Layout: left content + right activity */}
      <section className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <QuickActions />

          <div className="card p-4">
            <h3 className="text-lg font-semibold text-heading dark:text-heading-dark mb-3">Today’s Focus</h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <input type="text" className="input flex-1" placeholder="Add a new habit or task..." />
              <button className="btn-primary">Add</button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <ActivityList items={activity} />
        </div>
      </section>
    </div>
  );
}
