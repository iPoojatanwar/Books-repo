import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Login from './Login'
import toast from 'react-hot-toast'
import { useForm } from 'react-hook-form'

const Signup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const form = location.state?.form?.pathname || "/";
  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    }

    try {
      const res = await axios.post("http://localhost:4000/user/signup", userInfo);
      console.log(res.data);
      
      if (res.data) {
        toast.success('Signup successful');
        localStorage.setItem("user", JSON.stringify(res.data));

        navigate("/coures", { replace: true });
        window.location.reload();
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  }

  return (
    <>
      <div className='h-screen flex justify-center items-center dark:bg-black dark:text-white'>
        <div className="w-[600px] dark:border">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='model-box shadow-xl p-2'>
              <div className='flex justify-between'>
                <h3 className="font-bold text-lg">Signup</h3>
                <button className="btn btn-sm btn-circle btn-ghost"> <Link to='/'>✕</Link></button>
              </div>

              <div className='flex flex-col p-4'>
                <label className='w-100' htmlFor="">Full Name</label>
                <input className='w-80 border border-gray-600 rounded p-2' type="text" {...register("fullname", { required: "Enter your name *" })} aria-invalid={errors.fullname ? "true" : "false"} placeholder='Enter your name' />
                {errors.fullname && <p className='text-red-600' role='alert'>{errors.fullname?.message}</p>}
              </div>

              <div className='flex flex-col p-4'>
                <label className='w-100' htmlFor="">Email</label>
                <input className='w-80 border border-gray-600 rounded p-2' type="email" {...register("email", { required: "Enter your email*" })} aria-invalid={errors.email ? "true" : "false"} placeholder='Enter your email' />
                {errors.email && <p className='text-red-600' role='alert'>{errors.email?.message}</p>}
              </div>

              <div className='flex flex-col p-4'>
                <label className='w-100' htmlFor="">Password</label>
                <input className='w-80 border border-gray-600 rounded p-2' type="password" {...register("password", { required: "Enter your password *" })} aria-invalid={errors.password ? "true" : "false"} placeholder='Enter your password' />
                {errors.password && <p className='text-red-600' role='alert'>{errors.password?.message}</p>}
              </div>

              <div className='flex justify-between p-4'>
                <button className='btn bg-pink-500 border border-rounded text-white hover:bg-pink-800'>Signup</button>
                <p>Have an account?<span className='link link-info' onClick={() => document.getElementById('my_modal_3').showModal()}> Login</span></p>
              </div>

              <Login />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup;
