// src/pages/Register.jsx
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '../styles/AuthPages.css';

const Register = () => {
  const [step, setStep] = useState(1);
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const { register: authRegister } = useContext(AuthContext);

  const onSubmit = data => {
    authRegister(data);
  };

  const password = watch('password');

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <h1>Create Your Account</h1>
            <p>Join our community and start your health journey</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
            {/* Step Indicator */}
            <div className="steps-indicator">
              <div className={`step ${step >= 1 ? 'active' : ''}`}>1</div>
              <div className={`step-line ${step >= 2 ? 'active' : ''}`}></div>
              <div className={`step ${step >= 2 ? 'active' : ''}`}>2</div>
            </div>

            {/* Step 1: Basic Info */}
            {step === 1 && (
              <>
                <div className="input-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    {...register('name', {
                      required: 'Full name is required',
                      minLength: {
                        value: 2,
                        message: 'Name must be at least 2 characters',
                      },
                    })}
                  />
                  {errors.name && <p className="error-message">{errors.name.message}</p>}
                </div>

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

                <div className="input-group">
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    {...register('password', {
                      required: 'Password is required',
                      minLength: {
                        value: 8,
                        message: 'Password must be at least 8 characters',
                      },
                    })}
                  />
                  {errors.password && <p className="error-message">{errors.password.message}</p>}
                </div>

                <div className="input-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    {...register('confirmPassword', {
                      required: 'Please confirm your password',
                      validate: value =>
                        value === password || 'Passwords do not match',
                    })}
                  />
                  {errors.confirmPassword && <p className="error-message">{errors.confirmPassword.message}</p>}
                </div>

                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="btn btn--primary btn--block btn--lg"
                >
                  Next: Health Info
                </button>
              </>
            )}

            {/* Step 2: Health Info */}
            {step === 2 && (
              <>
                <div className="input-group">
                  <label htmlFor="age">Age</label>
                  <input
                    id="age"
                    type="number"
                    placeholder="25"
                    min="18"
                    max="120"
                    {...register('age', {
                      required: 'Age is required',
                      min: { value: 18, message: 'You must be at least 18' },
                    })}
                  />
                  {errors.age && <p className="error-message">{errors.age.message}</p>}
                </div>

                <div className="input-group">
                  <label htmlFor="gender">Gender</label>
                  <select
                    id="gender"
                    {...register('gender', { required: 'Please select a gender' })}
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.gender && <p className="error-message">{errors.gender.message}</p>}
                </div>

                <div className="input-group">
                  <label htmlFor="bloodType">Blood Type (Optional)</label>
                  <select id="bloodType" {...register('bloodType')}>
                    <option value="">Select Blood Type</option>
                    <option value="o+">O+</option>
                    <option value="o-">O-</option>
                    <option value="a+">A+</option>
                    <option value="a-">A-</option>
                    <option value="b+">B+</option>
                    <option value="b-">B-</option>
                    <option value="ab+">AB+</option>
                    <option value="ab-">AB-</option>
                  </select>
                </div>

                <div className="input-group checkbox">
                  <label>
                    <input
                      type="checkbox"
                      {...register('terms', {
                        required: 'You must agree to the terms and conditions',
                      })}
                    />
                    <span>
                      I agree to the{' '}
                      <Link to="#" className="auth-link">
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link to="#" className="auth-link">
                        Privacy Policy
                      </Link>
                    </span>
                  </label>
                  {errors.terms && <p className="error-message">{errors.terms.message}</p>}
                </div>

                <div className="auth-buttons">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="btn btn--secondary btn--block btn--lg"
                  >
                    Back
                  </button>
                  <button type="submit" className="btn btn--primary btn--block btn--lg">
                    Create Account
                  </button>
                </div>
              </>
            )}
          </form>

          {/* Sign In Link */}
          <div className="auth-footer">
            <p>
              Already have an account?{' '}
              <Link to="/login" className="auth-link">
                Sign in here
              </Link>
            </p>
          </div>
        </div>

        {/* Side Graphic (Desktop Only) */}
        <div className="auth-graphic hidden-mobile">
          <div className="graphic-content">
            <div className="graphic-icon">💪</div>
            <h2>Start Your Journey</h2>
            <p>Take control of your health with our AI-powered tools</p>
            <div className="graphic-features">
              <div className="feature">✓ Free health assessment</div>
              <div className="feature">✓ Personalized recommendations</div>
              <div className="feature">✓ Progress tracking</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;