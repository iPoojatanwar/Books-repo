import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Course from '../Course'

export const Courses = () => {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen '> 
       <Course/> </div>
    
<Footer/>
    </>
  )
}
