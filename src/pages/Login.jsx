// src/pages/Login.jsx
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '../styles/AuthPages.css';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { login } = useContext(AuthContext);

  const onSubmit = data => login(data);

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <h1>Welcome Back</h1>
            <p>Sign in to access your health dashboard</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
            {/* Email Input */}
            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="your@email.com"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Please enter a valid email address',
                  },
                })}
              />
              {errors.email && <p className="error-message">{errors.email.message}</p>}
            </div>

            {/* Password Input */}
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters',
                  },
                })}
              />
              {errors.password && <p className="error-message">{errors.password.message}</p>}
            </div>

            {/* Remember & Forgot Password */}
            <div className="auth-options">
              <label className="remember-me">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <Link to="#" className="forgot-password">Forgot Password?</Link>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn--primary btn--block btn--lg">
              Sign In
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="auth-footer">
            <p>
              Don't have an account?{' '}
              <Link to="/register" className="auth-link">
                Sign up here
              </Link>
            </p>
          </div>

          {/* Divider */}
          <div className="auth-divider">
            <span>Or continue with</span>
          </div>

          {/* Social Options */}
          <div className="social-buttons">
            <button type="button" className="btn btn--social">
              <span>🔷</span> Google
            </button>
            <button type="button" className="btn btn--social">
              <span>📘</span> Facebook
            </button>
          </div>
        </div>

        {/* Side Graphic (Desktop Only) */}
        <div className="auth-graphic hidden-mobile">
          <div className="graphic-content">
            <div className="graphic-icon">🏥</div>
            <h2>Health Care</h2>
            <p>Your personal AI health assistant</p>
            <div className="graphic-features">
              <div className="feature">✓ Instant diagnosis</div>
              <div className="feature">✓ Personalized care</div>
              <div className="feature">✓ 24/7 support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;