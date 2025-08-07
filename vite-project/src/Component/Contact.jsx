import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

const Contact = () => {
  const{register, formState:{errors}, handleSubmit}=useForm()
  const onSubmit= (data)=>{toast.success("Thank you for your feedback 💐💐💐")} 
  
  return (
    <>
  
    <div className=' flex justify-center items-center dark:bg-black dark:text-white '>
     <div  className=" md:w-1/2 flex justify-center items-center shadow-ms mt-10 shadow-gray-300 border mt-20 " >
     <form   onSubmit={handleSubmit(onSubmit)} className='w-full flex justify-center items-center py-12' >
  <div className='model-box  p-2  '> 
  <div className='flex justify-center'>
  
    
        <h3 className="font-bold text-center">Contact Us</h3>
    
        </div>
       
       
        <div className='flex  flex-col p-4'>
            <label className='w-100' htmlFor="">Email</label>
            <input className='w-100 border border-gray-600 rounded p-2' type="email" {...register("email" ,{required:"Enter your email*"})}aria-invalid={errors.email?"true":"false"} placeholder='Enter your email'/>
            {errors.email &&<p className='text-red-600' role='alert'>{errors.email?.message}</p>}
        </div>
      
        <div className='flex  flex-col p-4'>
            <label className='w-100' htmlFor="">Text</label>
            <textarea className='w-100 border border-gray-600 rounded p-2' type="textarea" {...register("textarea" ,{required:"Enter your message *"})}aria-invalid={errors.textarea?"true":"false"}  placeholder='Enter some text'></textarea>
            {errors.textarea &&<p className='text-red-600' role='alert'>{errors.textarea?.message}</p>}
        </div>
       
        
        
      <div className='flex justify-center m-8'><button className='btn bg-pink-600'>Submit</button></div>
      </div>
    </form>
    </div>
    </div>
    

    </>
  )
}

export default Contact