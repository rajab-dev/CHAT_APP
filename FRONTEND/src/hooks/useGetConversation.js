import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const useGetConversation = () => {
  const [loading, setloading] = useState(false);
  const [conversations, setconversations] = useState([])

  useEffect(() => {

    const getConversations = async () => {
    setloading(true)
      
    try {
       
      const res = await fetch("/api/user")
      const data = await res.json();

      if(data.error){
        throw new Error(data.error)
      }

      setconversations(data)

    } catch (error) {

      toast.error(error.message)

    }finally {
      setloading(false)
    }
    }
    getConversations()
  }, []);

   return {loading, conversations}
    
}

export default useGetConversation