import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

function Login() {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const navigate = useNavigate(); 
  const API_BASE_URL= import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000'

  const onSubmit = async data => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post(`${API_BASE_URL}/user/login`, userInfo);
      
      if (res.data) {
        toast.success('Login successful');
        localStorage.setItem("user", JSON.stringify(res.data));
        
        
        navigate('/coures'); 
        window.location.reload();
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
        document.getElementById('modal-box').close();
        window.location.reload();
      }
    }
  };

  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-black dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)}>

            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              <Link to='/' onClick={() => { document.getElementById('modal-box').close() }}>
                ✕
              </Link>
            </button>

            <h3 className="font-bold text-lg">Login</h3>
            <div className='flex flex-col p-4'>
              <label className='w-100' htmlFor="">Email</label>
              <input
                {...register("email", { required: "Email is required *" })}
                aria-invalid={errors.email ? "true" : "false"}
                className='w-80 border border-gray-600 rounded p-2' type='email'
                placeholder='Enter your email'
              />
              {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
            </div>
            <div className='flex flex-col p-4'>
              <label className='w-100' htmlFor="">Password</label>
              <input
                {...register("password", { required: "Enter your password *" })}
                aria-invalid={errors.password ? "true" : "false"}
                className='w-80 border border-gray-600 rounded p-2'
                type='password'
                placeholder='Enter your password'
              />
              {errors.password && <p className='text-red-600' role='alert'>{errors.password?.message}</p>}
            </div>
            <div className='flex justify-between p-4'>
              <button className='btn bg-pink-500 border border-rounded text-white hover:bg-pink-800'>
                Login
              </button>
              <p>Not Registered?
                <span className='link link-info'>
                  <Link to='/signup'>Signup</Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}

export default Login;
