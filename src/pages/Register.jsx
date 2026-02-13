// src/pages/Register.jsx
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../context/AuthContext';

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { register: authRegister } = useContext(AuthContext);

  const onSubmit = data => authRegister(data);

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit(onSubmit)} className="card w-96">
        <h2 className="text-2xl mb-4">Register</h2>
        <input {...register('name', { required: true })} placeholder="Name" className="p-2 mb-2 border" />
        {errors.name && <p className="text-red-500">Required</p>}
        <input {...register('email', { required: true })} placeholder="Email" className="p-2 mb-2 border" />
        {errors.email && <p className="text-red-500">Required</p>}
        <input {...register('password', { required: true })} type="password" placeholder="Password" className="p-2 mb-2 border" />
        {errors.password && <p className="text-red-500">Required</p>}
        <input {...register('age', { required: true })} placeholder="Age" className="p-2 mb-2 border" />
        {errors.age && <p className="text-red-500">Required</p>}
        <select {...register('gender', { required: true })} className="p-2 mb-2 border">
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        {errors.gender && <p className="text-red-500">Required</p>}
        <button type="submit" className="bg-soft-blue text-white p-2 rounded">Register</button>
      </form>
    </div>
  );
};

export default Register;