import React, { useEffect, useState } from 'react'
import useConversation from '../zustand/useConversation'
import toast from 'react-hot-toast'


const useGetMessages = () => {
   const [loading, setloading] = useState(false)
   const{selectedConversation,setMessages,messages} = useConversation()
    useEffect(() => {

      const getMessages = async () => {
        
        setloading(true)
        try {
          const res = await fetch(`https://chat-app-fr04.onrender.com/api/messages/${selectedConversation._id}`,{credentials: 'include'})
          // const res = await fetch(`http://localhost:5000/api/messages/${selectedConversation._id}`,{credentials: 'include'})
          const data = await res.json();
          if(data.error){
            throw new Error(data.error)
          }
          setMessages(data)
        } catch (error) {
          toast.error(error.message)
        }finally {
          setloading(false)
        }
      }
      // return () => {
        
      // };
      
    if(selectedConversation?._id){
      getMessages();
    }

    }, [selectedConversation?._id,setMessages]);

   return {loading, messages}
}

export default useGetMessages