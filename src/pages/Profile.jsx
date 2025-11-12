export default function Profile() {
  return (
    <div className="w-full max-w-2xl p-6">
      <h1 className="text-2xl font-semibold text-heading dark:text-heading-dark mb-4">Your Profile</h1>

      <div className="card">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input className="input" defaultValue="Pratham" />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input className="input" type="email" defaultValue="you@example.com" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm mb-1">Bio</label>
            <textarea className="input min-h-24" placeholder="Tell us about yourself..." />
          </div>
        </div>

        <div className="flex gap-3 mt-4">
          <button className="btn-primary">Save</button>
          <button className="btn-secondary">Cancel</button>
        </div>
      </div>
    </div>
  )
}
