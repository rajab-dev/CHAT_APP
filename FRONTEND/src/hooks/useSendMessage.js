import React, { useState } from 'react'
import useConversation from '../zustand/useConversation'
import toast from "react-hot-toast"
import axios from "axios"


const useSendMessage = () => {
  const [loading, setloading] = useState(false)
   const {selectedConversation,setMessages, messages}= useConversation()

   const sendMessage = async (message) => {

    const success = handleError(message)

    if(!success) return

     setloading(true)
    try {
      
      const res = await axios.post(`https://chat-app-fr04.onrender.com/api/messages/send/${selectedConversation._id}`,
        // const res = await axios.post(`http://localhost:5000/api/messages/send/${selectedConversation._id}`,
      message,
      { method:"POST",
        withCredentials: true,
        headers: {
          'Content-Type': 'text/plain',
        },
      })

      const data = await res.data
      // console.log("response ",data)

       if (data.error){
        throw new Error(data.error)
       }
       setMessages([...messages,data])
       toast.success("Message sent successfully")

    } catch (error) {
      toast.error(error.message)
    }finally {
      setloading(false)
    }

   }
   
 return {loading,sendMessage}

}

export default useSendMessage   


const handleError = (message) => {
    if(message==="" || message === undefined){
      toast.error("Write Somthing to send message")
      return false
    }
    return true
}