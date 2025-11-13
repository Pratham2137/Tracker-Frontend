import { useState } from 'react'
import { Eye, EyeOff, Mail, Lock, Chrome, Github } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      // TODO: Implement actual login API call
      if (!email || !password) {
        setError('Please fill in all fields')
        setIsLoading(false)
        return
      }
      
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false)
        // TODO: Redirect to home after successful login
      }, 1500)
    } catch (err) {
      setError(err.message || 'Login failed. Please try again.')
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary text-white font-bold text-xl mb-4">
            T
          </div>
          <h1 className="text-3xl font-semibold text-heading dark:text-heading-dark mb-2">Tracker</h1>
          <p className="text-sm text-text dark:text-text-dark opacity-80">Welcome back to your productivity hub</p>
        </div>

        {/* Login Card */}
        <div className="card p-6 mb-6">
          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-error/10 dark:bg-error-dark/10 border border-error dark:border-error-dark rounded-lg">
              <p className="text-sm text-error dark:text-error-dark">{error}</p>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-heading dark:text-heading-dark mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-text dark:text-text-dark opacity-60" size={18} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="input pl-10"
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-heading dark:text-heading-dark mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-text dark:text-text-dark opacity-60" size={18} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="input pl-10 pr-10"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-text dark:text-text-dark opacity-60 hover:opacity-100 transition-opacity"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Forgot Password Link */}
            <div className="flex justify-end">
              <a href="#" className="text-xs text-link dark:text-link-dark hover:text-link-hover dark:hover:text-link-hover-dark transition-colors">
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full btn-primary py-2 font-medium disabled:opacity-70 disabled:cursor-not-allowed transition-all"
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        </div>

        {/* Signup Link */}
        <div className="text-center">
          <p className="text-sm text-text dark:text-text-dark">
            Don't have an account?{' '}
            <Link to="/signup" className="font-medium text-link dark:text-link-dark hover:text-link-hover dark:hover:text-link-hover-dark transition-colors">
              Sign up
            </Link>
          </p>
        </div>

        {/* Social Login (Optional) */}
        <div className="mt-6 pt-6 border-t border-border dark:border-border-dark">
          <p className="text-xs text-center text-text dark:text-text-dark opacity-60 mb-4">Or continue with</p>
          <div className="grid grid-cols-2 gap-3">
            <button className="btn-secondary cursor-pointer py-2 text-sm font-medium flex relative justify-center items-center gap-2">
                <Chrome size={17} /> Google
              </button>
              <button className="btn-secondary cursor-pointer py-2 text-sm font-medium flex relative justify-center items-center gap-2">
                <Github size={17} /> GitHub
              </button>
          </div>
        </div>
      </div>
    </div>
  )
}