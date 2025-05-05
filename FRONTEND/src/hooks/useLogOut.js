import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext'

const useLogOut = () => {
  const [loading, setloading] = useState(false)
  const{ setAuthUser } = useAuthContext();

  const logout = async () => {

    setloading(true)

    try {
      
     const res = await fetch("https://chat-app-fr04.onrender.com/api/auth/logout",{
      // const res = await fetch("http://localhost:5000/api/auth/logout",{
      credentials: 'include',
       method:"POST",
       headers: {"Content-Type": "application/json"},
     }) 
     const data = await res.json();

     if(data.error){
      throw new Error(data.error)
     }

    
     

    } catch (error) {
      toast.error(error.message)
    }finally {

      const timer = setTimeout(() => {
       
        setloading(false)
        localStorage.removeItem("chat-user")
        setAuthUser(null)

      }, 1000);
  
     return ()=> clearTimeout(timer);
    }
  }


 return {loading, logout}

}

export default useLogOut