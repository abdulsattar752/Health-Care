// src/pages/DietPlanner.jsx
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const DietPlanner = () => {
  const { register, handleSubmit } = useForm();
  const [plan, setPlan] = useState(null);

  const onSubmit = (data) => {
    // Fake response
    setPlan({
      days: ['Day 1: Meal plan', 'Day 2: ...'],
      calories: 2000,
      water: '8 glasses',
      exercise: '30 min walk',
    });
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <form onSubmit={handleSubmit(onSubmit)} className="card">
          <input {...register('height')} placeholder="Height (cm)" className="p-2 mb-2 border" />
          <input {...register('weight')} placeholder="Weight (kg)" className="p-2 mb-2 border" />
          <select {...register('goal')} className="p-2 mb-2 border">
            <option>Lose Weight</option>
            <option>Gain Weight</option>
          </select>
          <select {...register('activity')} className="p-2 mb-2 border">
            <option>Sedentary</option>
            <option>Active</option>
          </select>
          <button type="submit" className="bg-soft-blue text-white p-2 rounded">Generate Plan</button>
        </form>
        {plan && (
          <div className="card mt-4">
            <h3>7 Day Plan</h3>
            <ul>{plan.days.map((day, i) => <li key={i}>{day}</li>)}</ul>
            <p>Calories: {plan.calories}</p>
            <p>Water: {plan.water}</p>
            <p>Exercise: {plan.exercise}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DietPlanner;