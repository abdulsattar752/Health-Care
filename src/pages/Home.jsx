// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="section section--hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Your AI-Powered Health Assistant</h1>
            <p className="hero-subtitle">
              Get instant health insights, personalized diet plans, and 24/7 AI-powered medical guidance
            </p>
            <div className="hero-buttons">
              <Link to="/login" className="btn btn--primary btn--lg">
                Get Started Now
              </Link>
              <a href="#features" className="btn btn--secondary btn--lg">
                Learn More
              </a>
            </div>
          </div>
          <div className="hero-illustration">
            <div className="illustration-placeholder">
              <span>🏥💊</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section section--light">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Our Platform?</h2>
            <p>Experience the future of healthcare with advanced AI technology</p>
          </div>

          <div className="features-grid">
            {/* Feature 1 */}
            <div className="feature-card">
              <div className="feature-card-icon">🔍</div>
              <h3>AI Symptom Checker</h3>
              <p>Analyze your symptoms with advanced AI technology and get potential diagnoses instantly</p>
            </div>

            {/* Feature 2 */}
            <div className="feature-card">
              <div className="feature-card-icon">🍎</div>
              <h3>Personalized Diet Plans</h3>
              <p>Get customized nutrition recommendations based on your health profile and preferences</p>
            </div>

            {/* Feature 3 */}
            <div className="feature-card">
              <div className="feature-card-icon">⚡</div>
              <h3>Risk Assessment</h3>
              <p>Understand your health risk factors with detailed analysis and prevention strategies</p>
            </div>

            {/* Feature 4 */}
            <div className="feature-card">
              <div className="feature-card-icon">💬</div>
              <h3>24/7 AI Chat Doctor</h3>
              <p>Get medical advice anytime from our intelligent healthcare assistant</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-header">
            <h2>How It Works</h2>
            <p>Three simple steps to better health</p>
          </div>

          <div className="steps-container">
            <div className="step-card">
              <h4>Sign Up</h4>
              <p>Create your account and provide your basic health information to get started</p>
            </div>

            <div className="step-card">
              <h4>Get Analysis</h4>
              <p>Use our AI tools to analyze symptoms, check risk factors, and get instant insights</p>
            </div>

            <div className="step-card">
              <h4>Take Action</h4>
              <p>Follow personalized recommendations and track your health improvements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section section--light">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">50K+</div>
              <div className="stat-label">Active Users</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">95%</div>
              <div className="stat-label">Satisfaction Rate</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Diagnoses Assessed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-header">
            <h2>What Our Users Say</h2>
            <p>Join thousands of satisfied users improving their health daily</p>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>
                "This app completely changed how I manage my health. The AI symptom checker is incredibly accurate and the personalized diet plans are exactly what I needed!"
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">JD</div>
                <div>
                  <div className="testimonial-name">John Doe</div>
                  <div className="testimonial-role">Health Enthusiast</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>
                "Having 24/7 access to an AI doctor is revolutionary. I've never felt more confident about my health decisions. Highly recommend!"
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">SJ</div>
                <div>
                  <div className="testimonial-name">Sarah Johnson</div>
                  <div className="testimonial-role">Fitness Coach</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>
                "The comprehensive health analysis gave me insights I never had before. The app is user-friendly and genuinely helpful for tracking my wellness journey."
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">MR</div>
                <div>
                  <div className="testimonial-name">Mike Ross</div>
                  <div className="testimonial-role">Business Professional</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section--hero">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Health?</h2>
            <p>Join thousands of users taking control of their wellness today</p>
            <Link to="/register" className="btn btn--secondary btn--lg">
              Get Started Free Today
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="footer-links">
            <a href="#" className="footer-link">About Us</a>
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Terms of Service</a>
            <a href="#" className="footer-link">Contact Us</a>
          </div>
          <p>&copy; 2026 Health Care. All rights reserved. | Transforming healthcare with AI</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;