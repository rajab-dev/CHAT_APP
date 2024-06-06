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
          const res = await fetch(`/api/messages/${selectedConversation._id}`)
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