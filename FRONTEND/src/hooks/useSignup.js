import React, { useState } from 'react'
import toast from "react-hot-toast"
import { useAuthContext } from '../context/AuthContext'

const useSignup = () => {
  
  const [loading, setloading] = useState(false)
  const{ setAuthUser } = useAuthContext();

  const  signup = async ({username,fullName,password,confirmPassword,gender}) => {

    
    
    const success = handleInputErrors({username,fullName,password,confirmPassword,gender})

    if(!success)return;

    setloading(true)
    try {
      
     const res = await fetch("/api/auth/signup",{
       method:"POST",
       headers: {"Content-Type": "application/json"},
       body:JSON.stringify({username,fullName,password,confirmPassword,gender})
     })

     const data = await res.json();
     console.log(data);
    
     if(data.error){
      throw new Error(data.error)
     } 

     localStorage.setItem("chat-user", JSON.stringify(data))
     setAuthUser(data)

    } catch (error) {

      toast.error(error.message)

    } finally{

      setloading(false)

    }
       
  }

  return {loading, signup}

}

export default useSignup


function handleInputErrors({username,fullName,password,confirmPassword,gender}){

  if(!username || !fullName || !password || !confirmPassword || !gender){
     toast.error("All fields are required")
     return false
  }

  if(password !== confirmPassword){
     toast.error("passwords donot match")
     return false
  }

  if(password.length <6){
    toast.error("Password must be atleast 6 characters")
    return false
  }

   return true


}