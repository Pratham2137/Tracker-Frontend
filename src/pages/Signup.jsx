import { useState } from "react";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  CheckCircle2,
  Chrome,
  Github,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) {
      setError("Full name is required");
      return false;
    }
    if (!formData.email.trim()) {
      setError("Email is required");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Please enter a valid email address");
      return false;
    }
    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long");
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // TODO: Implement actual signup API call
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        setSuccess(true);
        // TODO: Redirect to login after successful signup
      }, 1500);
    } catch (err) {
      setError(err.message || "Signup failed. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary text-white font-bold text-xl mb-4">
            T
          </div>
          <h1 className="text-3xl font-semibold text-heading dark:text-heading-dark mb-2">
            Tracker
          </h1>
          <p className="text-sm text-text dark:text-text-dark opacity-80">
            Start tracking your productivity today
          </p>
        </div>

        {/* Success Message */}
        {success && (
          <div className="mb-6 p-4 bg-success/10 dark:bg-success-dark/10 border border-success dark:border-success-dark rounded-lg">
            <div className="flex items-center gap-3">
              <CheckCircle2
                size={20}
                className="text-success dark:text-success-dark"
              />
              <div>
                <p className="text-sm font-medium text-success dark:text-success-dark">
                  Account created successfully!
                </p>
                <p className="text-xs text-success dark:text-success-dark opacity-80 mt-1">
                  Redirecting to login...
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Signup Card */}
        {!success && (
          <div className="card p-6 mb-6">
            {/* Error Message */}
            {error && (
              <div className="mb-4 p-3 bg-error/10 dark:bg-error-dark/10 border border-error dark:border-error-dark rounded-lg">
                <p className="text-sm text-error dark:text-error-dark">
                  {error}
                </p>
              </div>
            )}

            {/* Signup Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name Field */}
              <div>
                <label className="block text-sm font-medium text-heading dark:text-heading-dark mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-text dark:text-text-dark opacity-60"
                    size={18}
                  />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="input pl-10"
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-heading dark:text-heading-dark mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-text dark:text-text-dark opacity-60"
                    size={18}
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="input pl-10"
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-medium text-heading dark:text-heading-dark mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-text dark:text-text-dark opacity-60"
                    size={18}
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="input pl-10 pr-10"
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-text dark:text-text-dark opacity-60 hover:opacity-100 transition-opacity"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                <p className="text-xs text-text dark:text-text-dark opacity-60 mt-1">
                  At least 8 characters
                </p>
              </div>

              {/* Confirm Password Field */}
              <div>
                <label className="block text-sm font-medium text-heading dark:text-heading-dark mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-text dark:text-text-dark opacity-60"
                    size={18}
                  />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="input pl-10 pr-10"
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-text dark:text-text-dark opacity-60 hover:opacity-100 transition-opacity"
                    aria-label={
                      showConfirmPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 w-4 h-4 accent-primary cursor-pointer"
                  disabled={isLoading}
                  required
                />
                <label
                  htmlFor="terms"
                  className="text-xs text-text dark:text-text-dark cursor-pointer"
                >
                  I agree to the{" "}
                  <a
                    href="#"
                    className="text-link dark:text-link-dark hover:text-link-hover dark:hover:text-link-hover-dark transition-colors"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="text-link dark:text-link-dark hover:text-link-hover dark:hover:text-link-hover-dark transition-colors"
                  >
                    Privacy Policy
                  </a>
                </label>
              </div>

              {/* Signup Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full btn-primary cursor-pointer py-2 font-medium disabled:opacity-70 disabled:cursor-not-allowed transition-all"
              >
                {isLoading ? "Creating account..." : "Create Account"}
              </button>
            </form>
          </div>
        )}

        {/* Login Link */}
        {!success && (
          <div className="text-center">
            <p className="text-sm text-text dark:text-text-dark">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-link dark:text-link-dark hover:text-link-hover dark:hover:text-link-hover-dark transition-colors"
              >
                Sign in
              </Link>
            </p>
          </div>
        )}

        {/* Social Signup (Optional) */}
        {!success && (
          <div className="mt-6 pt-6 border-t border-border dark:border-border-dark">
            <p className="text-xs text-center text-text dark:text-text-dark opacity-60 mb-4">
              Or sign up with
            </p>
            <div className="grid grid-cols-2 gap-3">
              <button className="btn-secondary cursor-pointer py-2 text-sm font-medium flex relative justify-center items-center gap-2">
                <Chrome size={17} /> Google
              </button>
              <button className="btn-secondary cursor-pointer py-2 text-sm font-medium flex relative justify-center items-center gap-2">
                <Github size={17} /> GitHub
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
