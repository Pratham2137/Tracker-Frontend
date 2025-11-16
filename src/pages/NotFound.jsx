import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="max-w-xl w-full p-6 text-center">
      <h1 className="text-2xl font-semibold text-heading dark:text-heading-dark mb-2">Page not found</h1>
      <p className="text-text dark:text-text-dark mb-4">The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="btn-primary inline-block">Go home</Link>
    </div>
  )
}
