import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext'

const useLogin = () => {

  const [loading, setloading] = useState(false)

  const { setAuthUser } = useAuthContext();

  const login = async ({ username, password }) => {
        
    const success = handleErrors({username,password})
    
    if(!success)return

    setloading(true)

    try {

      const res = await fetch("https://chat-app-fr04.onrender.com/api/auth/login",{
        method:"POST",
        credentials: 'include',
        headers: {"Content-Type": "application/json"},
        body:JSON.stringify({username, password})
      }) 

      const data = await res.json();
      
      if(data.error){

        throw new Error(data.error)

      }

      localStorage.setItem("chat-user", JSON.stringify(data))
      setAuthUser(data)
      toast.success("Login Successfully")
      
    } catch (error) {

      toast.error(error.message)
    }finally {

      // setloading(false)
      const timer = setTimeout(() => {
       
        setloading(false)

      }, 500);
  
     return ()=> clearTimeout(timer);

    }
  }

  return { loading, login }
}

export default useLogin


const handleErrors = ({username, password}) => {

if(!username || !password){
  toast.error("All Fields are required")
  return false
}

return true


}