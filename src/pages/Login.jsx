// src/pages/Login.jsx
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { login } = useContext(AuthContext);

  const onSubmit = data => login(data);

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit(onSubmit)} className="card w-96">
        <h2 className="text-2xl mb-4">Login</h2>
        <input {...register('email', { required: true })} placeholder="Email" className="p-2 mb-2 border" />
        {errors.email && <p className="text-red-500">Required</p>}
        <input {...register('password', { required: true })} type="password" placeholder="Password" className="p-2 mb-2 border" />
        {errors.password && <p className="text-red-500">Required</p>}
        <button type="submit" className="bg-soft-blue text-white p-2 rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;