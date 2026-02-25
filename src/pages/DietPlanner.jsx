// src/pages/DietPlanner.jsx
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../components/Sidebar';
import { generateDietPlanPDF } from '../services/pdfUtils';
import '../styles/Features.css';

const DietPlanner = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setPlan({
        calories: 2000,
        meals: [
          {
            name: 'Breakfast',
            items: ['Oatmeal with berries', 'Green tea'],
            calories: 350,
            time: '7:00 AM',
          },
          {
            name: 'Lunch',
            items: ['Grilled chicken', 'Brown rice', 'Green salad'],
            calories: 600,
            time: '12:30 PM',
          },
          {
            name: 'Snack',
            items: ['Apple', 'Almonds'],
            calories: 200,
            time: '3:00 PM',
          },
          {
            name: 'Dinner',
            items: ['Salmon', 'Sweet potato', 'Steamed broccoli'],
            calories: 650,
            time: '7:00 PM',
          },
          {
            name: 'Evening',
            items: ['Yogurt', 'Honey'],
            calories: 200,
            time: '9:00 PM',
          },
        ],
        nutrition: {
          protein: '125g',
          carbs: '230g',
          fats: '65g',
          fiber: '35g',
        },
        water: '8-10 glasses',
        exercise: '30 minutes moderate activity',
      });
      setLoading(false);
    }, 1500);
  };

  const handleDownloadPDF = () => {
    if (!plan) return;
    
    const dietData = {
      meals: plan.meals.map(meal => ({
        type: meal.name,
        items: meal.items,
      })),
      nutrition: plan.nutrition,
      calories: plan.calories,
    };
    
    generateDietPlanPDF(dietData, 'my-diet-plan');
  };

  return (
    <div className="feature-layout">
      <Sidebar />
      
      <main className="feature-main">
        <div className="feature-container">
          {/* Header */}
          <div className="feature-header">
            <h1>🍎 Diet Planner</h1>
            <p>Get a personalized nutrition plan tailored to your health goals</p>
          </div>

          <div className="feature-grid">
            {/* Form Section */}
            <section className="feature-card-section">
              <h2>Create Your Diet Plan</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="diet-form">
                <div className="form-row">
                  <div className="input-group">
                    <label htmlFor="goal">Health Goal</label>
                    <select {...register('goal', { required: 'Please select a goal' })} id="goal">
                      <option value="">Select your goal</option>
                      <option value="weight-loss">Weight Loss</option>
                      <option value="weight-gain">Weight Gain</option>
                      <option value="maintenance">Maintenance</option>
                      <option value="muscle">Muscle Building</option>
                    </select>
                    {errors.goal && <p className="error-message">{errors.goal.message}</p>}
                  </div>
                  <div className="input-group">
                    <label htmlFor="dietary">Dietary Preference</label>
                    <select {...register('dietary')} id="dietary">
                      <option value="">Select preference</option>
                      <option value="omnivore">Omnivore</option>
                      <option value="vegetarian">Vegetarian</option>
                      <option value="vegan">Vegan</option>
                      <option value="keto">Keto</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="input-group">
                    <label htmlFor="activity">Activity Level</label>
                    <select {...register('activity')} id="activity">
                      <option value="">Select level</option>
                      <option value="sedentary">Sedentary</option>
                      <option value="light">Light</option>
                      <option value="moderate">Moderate</option>
                      <option value="active">Active</option>
                    </select>
                  </div>
                  <div className="input-group">
                    <label htmlFor="allergies">Allergies/Restrictions</label>
                    <input
                      type="text"
                      id="allergies"
                      placeholder="e.g., nuts, dairy..."
                      {...register('allergies')}
                    />
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="btn btn--primary btn--lg"
                  disabled={loading}
                >
                  {loading ? 'Generating Plan...' : 'Generate Diet Plan'}
                </button>
              </form>
            </section>

            {/* Plan Section */}
            {plan && (
              <section className="feature-card-section plan-section">
                <h2>Your Personalized Diet Plan</h2>

                {/* Nutrition Overview */}
                <div className="nutrition-overview">
                  <div className="nutrition-item">
                    <div className="nutrition-label">Daily Calories</div>
                    <div className="nutrition-value">{plan.calories}</div>
                  </div>
                  <div className="nutrition-item">
                    <div className="nutrition-label">Protein</div>
                    <div className="nutrition-value">{plan.nutrition.protein}</div>
                  </div>
                  <div className="nutrition-item">
                    <div className="nutrition-label">Carbs</div>
                    <div className="nutrition-value">{plan.nutrition.carbs}</div>
                  </div>
                  <div className="nutrition-item">
                    <div className="nutrition-label">Fats</div>
                    <div className="nutrition-value">{plan.nutrition.fats}</div>
                  </div>
                </div>

                {/* Daily Meals */}
                <div className="meals-section">
                  <h3>Daily Meal Schedule</h3>
                  {plan.meals.map((meal, index) => (
                    <div key={index} className="meal-card">
                      <div className="meal-header">
                        <h4>{meal.name}</h4>
                        <span className="meal-time">{meal.time}</span>
                        <span className="meal-cal">{meal.calories} cal</span>
                      </div>
                      <ul className="meal-items">
                        {meal.items.map((item, idx) => (
                          <li key={idx}>✓ {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Recommendations */}
                <div className="recommendations-section">
                  <h3>Daily Recommendations</h3>
                  <div className="rec-item">
                    <span className="rec-icon">💧</span>
                    <span>Water Intake: {plan.water}</span>
                  </div>
                  <div className="rec-item">
                    <span className="rec-icon">🏃</span>
                    <span>Exercise: {plan.exercise}</span>
                  </div>
                </div>

                <button 
                  className="btn btn--secondary btn--block"
                  onClick={handleDownloadPDF}
                  title="Download your diet plan as PDF"
                >
                  📥 Download PDF Plan
                </button>
              </section>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DietPlanner;