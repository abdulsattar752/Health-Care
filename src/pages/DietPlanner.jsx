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
    // Generate diet plan based on selection
    const mealPlans = {
      'pakistani': {
        calories: 2200,
        meals: [
          {
            name: 'Breakfast',
            items: ['Aloo Paratha with yogurt', 'Chai (Tea)', 'Fried egg'],
            calories: 400,
            time: '7:00 AM',
          },
          {
            name: 'Mid-Morning Snack',
            items: ['Samosa', 'Fruit juice'],
            calories: 200,
            time: '10:00 AM',
          },
          {
            name: 'Lunch',
            items: ['Biryani or Pulao', 'Raita (yogurt)', 'Salad'],
            calories: 700,
            time: '1:00 PM',
          },
          {
            name: 'Afternoon Snack',
            items: ['Pakora or Chikhalwali', 'Chai (Tea)'],
            calories: 250,
            time: '4:00 PM',
          },
          {
            name: 'Dinner',
            items: ['Karahi or Curry', 'Naan or Roti', 'Dal'],
            calories: 650,
            time: '8:00 PM',
          },
        ],
        nutrition: {
          protein: '135g',
          carbs: '260g',
          fats: '70g',
          fiber: '32g',
        },
      },
      'general': {
        calories: 2000,
        meals: [
          {
            name: 'Breakfast',
            items: ['Oatmeal with berries', 'Green tea'],
            calories: 350,
            time: '7:00 AM',
          },
          {
            name: 'Mid-Morning Snack',
            items: ['Apple', 'Almonds'],
            calories: 150,
            time: '10:00 AM',
          },
          {
            name: 'Lunch',
            items: ['Grilled chicken', 'Brown rice', 'Green salad'],
            calories: 600,
            time: '12:30 PM',
          },
          {
            name: 'Afternoon Snack',
            items: ['Banana', 'Peanut butter'],
            calories: 200,
            time: '3:00 PM',
          },
          {
            name: 'Dinner',
            items: ['Salmon', 'Sweet potato', 'Steamed broccoli'],
            calories: 650,
            time: '7:00 PM',
          },
        ],
        nutrition: {
          protein: '125g',
          carbs: '230g',
          fats: '65g',
          fiber: '35g',
        },
      },
    };

    // Simulate API call
    setTimeout(() => {
      const cuisine = data.cuisine || 'general';
      const selectedPlan = mealPlans[cuisine] || mealPlans.general;
      
      setPlan({
        ...selectedPlan,
        water: '8-10 glasses',
        exercise: '30 minutes moderate activity',
        cuisine: cuisine,
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

          {/* Pakistani Diet Options Overview */}
          <section className="feature-card-section pakistan-diet-section">
            <h2>🇵🇰 Popular Pakistani Diet Plans</h2>
            <p className="section-subtitle">Discover traditional Pakistani meals for balanced nutrition</p>
            <div className="pakistan-diet-table-wrapper">
              <table className="pakistan-diet-table">
                <thead>
                  <tr>
                    <th>Breakfast 🌅</th>
                    <th>Lunch 🍽️</th>
                    <th>Dinner 🌙</th>
                    <th>Snacks 🥤</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Aloo Paratha</strong><br/>
                      Potatoes & spices in dough<br/>
                      <span className="cal-badge">~400 cal</span>
                    </td>
                    <td>
                      <strong>Chicken Biryani</strong><br/>
                      Rice, chicken & spices<br/>
                      <span className="cal-badge">~700 cal</span>
                    </td>
                    <td>
                      <strong>Karahi</strong><br/>
                      Meat in tomato & spices<br/>
                      <span className="cal-badge">~650 cal</span>
                    </td>
                    <td>
                      <strong>Samosa</strong><br/>
                      Fried pastry with filling<br/>
                      <span className="cal-badge">~200 cal</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Puri Chana</strong><br/>
                      Fried bread & chickpeas<br/>
                      <span className="cal-badge">~380 cal</span>
                    </td>
                    <td>
                      <strong>Haleem</strong><br/>
                      Meat & lentils slow-cooked<br/>
                      <span className="cal-badge">~680 cal</span>
                    </td>
                    <td>
                      <strong>Nihari</strong><br/>
                      Stew with meat & spices<br/>
                      <span className="cal-badge">~620 cal</span>
                    </td>
                    <td>
                      <strong>Pakora</strong><br/>
                      Spiced vegetable fritters<br/>
                      <span className="cal-badge">~180 cal</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Naan & Eggs</strong><br/>
                      Flatbread with fried eggs<br/>
                      <span className="cal-badge">~420 cal</span>
                    </td>
                    <td>
                      <strong>Pulao</strong><br/>
                      Fragrant rice with meat<br/>
                      <span className="cal-badge">~650 cal</span>
                    </td>
                    <td>
                      <strong>Tandoori Chicken</strong><br/>
                      Spiced marinated chicken<br/>
                      <span className="cal-badge">~550 cal</span>
                    </td>
                    <td>
                      <strong>Chai & Biscuits</strong><br/>
                      Tea with cookies<br/>
                      <span className="cal-badge">~220 cal</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

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
                    <label htmlFor="cuisine">Cuisine Type</label>
                    <select {...register('cuisine')} id="cuisine">
                      <option value="general">International</option>
                      <option value="pakistani">Pakistani 🇵🇰</option>
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
                  <div className="meals-table-wrapper">
                    <table className="meals-table">
                      <thead>
                        <tr>
                          <th>Time</th>
                          <th>Meal Type</th>
                          <th>Items</th>
                          <th>Calories</th>
                        </tr>
                      </thead>
                      <tbody>
                        {plan.meals.map((meal, index) => (
                          <tr key={index}>
                            <td className="meal-time-cell">{meal.time}</td>
                            <td className="meal-type-cell">
                              <strong>{meal.name}</strong>
                            </td>
                            <td className="meal-items-cell">
                              {meal.items.join(', ')}
                            </td>
                            <td className="meal-cal-cell">{meal.calories} cal</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
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