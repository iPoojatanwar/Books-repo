import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Courses } from './Component/Courses/Courses'
import Home from './Component/Home/Home'
 
import  { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Course from './Component/Course'
import Contact from './Component/Contact'
import Contactus from './Component/Contact/Contactus'
import Signup from './Component/Signup'
import Login from './Component/Login'
import { Toaster } from 'react-hot-toast'
import { useAuth } from './Context/Authprovider'



function App() {
  const[authUser ,setAuthUser]=useAuth();
    console.log(authUser)

  return (
    <>
     <div className='dark:bg-black dark:text-white'>
       
    <Toaster/>

       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='contact' element={ <Contactus/>}/>
        <Route path='/coures' element={authUser?<Courses/>:<Navigate to ="/signup"/>}
          />
        <Route path='signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        
       </Routes>
       
       
    </div>
    </>
  )
}

export default App
