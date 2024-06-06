import React, { useEffect } from 'react'
import { useSocketContext } from '../context/SocketContext'
import useConversation from '../zustand/useConversation';
import notificationSound from "../assets/sounds/notification.mp3" 


const useListenMessages = () => {
   const {socket} = useSocketContext();
   const { messages,setMessages } = useConversation();
   useEffect(() => {
    
    socket?.on("newmessage",(newmessage)=>{
      newmessage.shouldShake = true
      const sound = new Audio(notificationSound);
      sound.play();
      setMessages([...messages,newmessage])

    })
    
    return () => socket?.off("newmessage")

   }, [socket, setMessages,messages]);
}

export default useListenMessages