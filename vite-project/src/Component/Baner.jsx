import React from 'react'
import baner from "../../public/Baner.jpg"

const Baner = () => {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 my-12 px-4 flex flex-col md:flex-row '>
    <div className='w-full order-2 md:w-1/2 p-2 md:p-24 md:py-34  md:order-1 '> 
    <h1 className=' text-2xl font-bold p-2' >Hello , Welcome here to learn  something  <span className='text-pink-600'> new every day!!!</span>  </h1>
    <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quos, odit iusto unde beatae libero, totam molestiae autem qui blanditiis doloribus id nisi soluta! Eius magni iste repellat nobis illo!</p>
    <label className="input validator w-90 md:w-118 dark:bg-black dark:text-white">
  <svg className="h-[1em] opacity-100 "  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
  <input type="email" placeholder="Email" required className=''/>
</label>
<div className="validator-hint hidden ">Enter valid email address</div>
<div className='my-6'>
<button className="btn btn-secondary">GetStart</button>
</div>

    </div>

    <div className='w-full  order-1 md:order-2 md:w-1/2 '>
<img src={baner} alt="" />
    </div>

    </div>
    </>
  )
}

export default Baner