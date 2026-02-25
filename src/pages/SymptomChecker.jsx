// src/pages/SymptomChecker.jsx
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../components/Sidebar';
import RiskBadge from '../components/RiskBadge';
import { generateHealthReportPDF } from '../services/pdfUtils';
import '../styles/Features.css';

const SymptomChecker = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setResult({
        symptoms: data.symptoms,
        diagnostics: [
          { name: 'Common Cold', probability: 45 },
          { name: 'Flu', probability: 30 },
          { name: 'Allergies', probability: 25 },
        ],
        riskLevel: 'Low',
        recommendations: [
          'Rest well and stay hydrated',
          'Over-the-counter pain reliever if needed',
          'Consult a doctor if symptoms persist',
        ],
      });
      setLoading(false);
    }, 1500);
  };

  const handleDownloadAnalysis = () => {
    if (!result) return;
    
    const analysisData = {
      patient: {
        'Symptoms': result.symptoms,
        'Risk Level': result.riskLevel,
      },
      metrics: result.diagnostics.map(d => ({
        label: d.name,
        value: d.probability,
        unit: '%',
      })),
      riskLevel: result.riskLevel,
      recommendations: result.recommendations.join('\n• '),
    };
    
    generateHealthReportPDF(analysisData, 'symptom-analysis');
  };

  return (
    <div className="feature-layout">
      <Sidebar />
      
      <main className="feature-main">
        <div className="feature-container">
          {/* Header */}
          <div className="feature-header">
            <h1>🔍 AI Symptom Checker</h1>
            <p>Describe your symptoms and get instant AI-powered analysis</p>
          </div>

          <div className="feature-grid">
            {/* Input Section */}
            <section className="feature-card-section">
              <h2>Describe Your Symptoms</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="symptom-form">
                <div className="input-group">
                  <label htmlFor="symptoms">What symptoms are you experiencing?</label>
                  <textarea
                    id="symptoms"
                    placeholder="e.g., headache, sore throat, fever..."
                    rows="4"
                    {...register('symptoms', { required: 'Please describe your symptoms' })}
                  />
                  {errors.symptoms && <p className="error-message">{errors.symptoms.message}</p>}
                </div>

                <div className="form-row">
                  <div className="input-group">
                    <label htmlFor="duration">Duration</label>
                    <select {...register('duration')}>
                      <option value="">Select duration</option>
                      <option value="less-than-24h">Less than 24 hours</option>
                      <option value="1-3-days">1-3 days</option>
                      <option value="1-week">1 week</option>
                      <option value="more-than-week">More than 1 week</option>
                    </select>
                  </div>
                  <div className="input-group">
                    <label htmlFor="severity">Severity</label>
                    <select {...register('severity')}>
                      <option value="">Select severity</option>
                      <option value="mild">Mild</option>
                      <option value="moderate">Moderate</option>
                      <option value="severe">Severe</option>
                    </select>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="btn btn--primary btn--lg"
                  disabled={loading}
                >
                  {loading ? 'Analyzing...' : 'Analyze Symptoms'}
                </button>
              </form>
            </section>

            {/* Results Section */}
            {result && (
              <section className="feature-card-section results-section">
                <h2>Analysis Results</h2>

                {/* Risk Level */}
                <div className="results-subsection">
                  <h3>Health Risk Assessment</h3>
                  <RiskBadge level={result.riskLevel} />
                </div>

                {/* Possible Conditions */}
                <div className="results-subsection">
                  <h3>Possible Conditions</h3>
                  <div className="diagnostic-list">
                    {result.diagnostics.map((item, index) => (
                      <div key={index} className="diagnostic-item">
                        <div className="diagnostic-name">{item.name}</div>
                        <div className="diagnostic-bar">
                          <div 
                            className="diagnostic-progress"
                            style={{ width: `${item.probability}%` }}
                          />
                        </div>
                        <div className="diagnostic-percent">{item.probability}%</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommendations */}
                <div className="results-subsection">
                  <h3>Recommendations</h3>
                  <ul className="recommendations-list">
                    {result.recommendations.map((rec, index) => (
                      <li key={index}>
                        <span className="rec-icon">✓</span>
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="disclaimer">
                  ⚠️ This AI analysis is not a substitute for professional medical advice. 
                  Always consult with a healthcare provider for proper diagnosis and treatment.
                </p>

                <button 
                  className="btn btn--secondary btn--block"
                  onClick={handleDownloadAnalysis}
                  style={{ marginTop: '20px' }}
                  title="Download your symptom analysis as PDF"
                >
                  📥 Download Analysis PDF
                </button>
              </section>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SymptomChecker;