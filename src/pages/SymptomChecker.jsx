// src/pages/SymptomChecker.jsx
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { checkSymptoms } from '../services/api';
import RiskBadge from '../components/RiskBadge';
import Sidebar from '../components/Sidebar';      // ← ADD THIS LINE

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
      <Sidebar />                     // ← now this will work
      <div className="flex-1 p-4">
        {/* rest of your form and result display */}
      </div>
    </div>
  );
};

export default SymptomChecker;