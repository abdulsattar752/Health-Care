// src/pages/SymptomChecker.jsx
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { checkSymptoms } from '../services/api';
import RiskBadge from '../components/RiskBadge';

const SymptomChecker = () => {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    const res = await checkSymptoms(data);
    setResult(res);
    setLoading(false);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <form onSubmit={handleSubmit(onSubmit)} className="card">
          <textarea {...register('symptoms')} placeholder="Symptoms" className="p-2 mb-2 border" />
          <input {...register('age')} placeholder="Age" className="p-2 mb-2 border" />
          <select {...register('gender')} className="p-2 mb-2 border">
            <option>Male</option>
            <option>Female</option>
          </select>
          <select {...register('existingDisease')} className="p-2 mb-2 border">
            <option>None</option>
            <option>Diabetes</option>
          </select>
          <button type="submit" className="bg-soft-blue text-white p-2 rounded">Submit</button>
        </form>
        {loading && <p>Loading...</p>}
        {result && (
          <div className="card mt-4">
            <h3>{result.disease}</h3>
            <p>Risk: {result.risk}%</p>
            <RiskBadge level={result.risk > 70 ? 'High' : result.risk > 40 ? 'Medium' : 'Low'} />
            <p>{result.advice}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SymptomChecker;