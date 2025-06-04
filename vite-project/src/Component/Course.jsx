import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Allbook from '../Component/Allbook'
import Home from './Home/Home'
import { Link } from 'react-router-dom'
const Course = () => {
  const [books , setBooks]=useState([])
  useEffect(()=>{
    
      const getbook=async()=>{
        try {
        const res= await axios.get("http://localhost:4000/book")
        console.log(res.data)
        setBooks(res.data)
    } catch (error) {
      console.log(error)
    }
    };
    getbook()
  },[])
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 my-12 px-4 '>
        <div className=' py-12 item-center text-center justify-center  '>
        <h1 className=' text-4xl font-semibold'>We'r delighted to you are <span className='text-pink-500'>here!:)</span></h1>
        
        <p className='py-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, at corrupti iusto asperiores distinctio corporis, doloribus dolorum adipisci nisi recusandae ab unde suscipit quasi assumenda quas accusamus! Deleniti, doloremque tempore.
        Recusandae consectetur provident odit quas doloribus harum, id repudiandae qui quam cupiditate atque animi, asperiores dignissimos nostrum vel obcaecati tempora maiores sunt dolorum? Esse suscipit fuga ducimus officia voluptate eius.</p>
   <button className='btn bg-pink-500 p-6 text-xl'><Link to='/'> Back</Link></button>
   
    </div >
    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-3 border-gray-600' >
{
  books.map((item)=>{
return <div key={item.id} className='hover:shadow-lg-black hover:translate-y-2 duration-200 sm:hover:translate-y-2 duration-200  '>
<div className="card  w-99  bg-base-100 shadow-xl  dark:bg-black dark:text-white dark:border  ">
          <figure>
            <img className=''
              src={item.url}
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium porro aliquam voluptatibus iusto! </p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline dark:bg-black dark:text-white  ">${item.price}</div>
              <div className="badge badge-outline hover:bg-pink-600  hover:border-pink-500 duration-200 hover:text-white p-4 font-semibold">Buy Now</div>
            </div>
          </div>
        </div>
        </div>
  })
}
    </div>
    </div>
    
    </>
  )
}

export default Course