export default function Settings() {
  return (
    <div className="w-full px-4 pt-4 pb-8 max-w-xl">
      <h1 className="text-2xl font-semibold text-heading dark:text-heading-dark mb-4">Settings</h1>
      <div className="card space-y-4">
        <section>
          <h2 className="text-lg font-medium mb-2">Preferences</h2>
          <p className="text-sm opacity-80 mb-2">Adjust your application preferences.</p>
          <div className="flex items-center justify-between py-2">
            <span className="text-sm">Email Notifications</span>
            <input type="checkbox" className="w-4 h-4" defaultChecked />
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-sm">Weekly Summary</span>
            <input type="checkbox" className="w-4 h-4" />
          </div>
        </section>
        <section>
          <h2 className="text-lg font-medium mb-2">Account</h2>
          <button className="btn-secondary">Change Password</button>
        </section>
        <div className="flex gap-3 pt-2">
          <button className="btn-primary">Save Changes</button>
          <button className="btn-secondary">Cancel</button>
        </div>
      </div>
    </div>
  )
}
