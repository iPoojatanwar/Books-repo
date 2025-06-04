import React from 'react'
import { useAuth } from '../Context/Authprovider'
import toast from 'react-hot-toast';

const Logout = () => {
    const [authUser , setAuthUser]= useAuth();
     const handleLogout=()=>{
try {
    setAuthUser({
        ...authUser,
    user:null,
    })
    localStorage.removeItem("user")
    toast.success("Logout Successfully")
    window.location.reload();
} catch (error) {
    toast.error(error.message)
    
}
     }
  return (
    <>
    <button 
    onClick={handleLogout}
    className='px-2 py-2 bg-red-800 border border-red-800 rounded'>LogOut</button>
    </>
  )
}

export default Logout