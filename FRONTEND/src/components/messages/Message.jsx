import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation'
import { extractTime } from '../../utils/extractTime'

const Message = ({message}) => {
  const {authUser} = useAuthContext()
 const {selectedConversation} = useConversation()
 const fromMe = message.sender === authUser._id

 const chatClassName = fromMe ? 'chat-end' : 'chat-start'
 const profilePic = fromMe ? authUser?.profilePic : selectedConversation?.profilePic;
 const bubbleBgColor = fromMe ? 'bg-blue-500' : ''
 const time = extractTime(message?.createdAt)
const shakeClass = message.shouldShake ? "shake" : ""
const hasExtremelyLongWord = (text) => {
  if (!text) return false;
  const words = text.split(/\s+/);
  return words.some(word => word.length > 30); // Adjust threshold as needed
};

return (
  <div className={`chat ${chatClassName}`}>
    <div className='chat-image avatar'>
      <div className='w-8 sm:w-10 rounded-full'>
        <img 
          alt='message avatar'
          src={profilePic}
          className='object-cover w-full h-full'
        />
      </div>
    </div>
    
    {/* Message Bubble */}
    <div className={`
      chat-bubble text-white ${bubbleBgColor} ${shakeClass}
      whitespace-pre-wrap
      ${hasExtremelyLongWord(message?.message) ? 'break-all' : 'break-words'}
      max-w-[90vw] sm:max-w-xs md:max-w-md
      text-xs sm:text-sm
      px-3 py-2
      overflow-x-hidden
    `}>
      {message?.message}
    </div>

    <div className='chat-footer opacity-50 text-[10px] xs:text-xs flex gap-1 items-center mt-1'>
      {time}
    </div>
  </div>
);
  // return (
  //   <div className={`chat ${chatClassName}`}>
  //     <div className='chat-image avatar'>
  //       <div className='w-10 rounded-full'>
  //         <img 
  //         alt='bubble text component'
  //         src={profilePic} 
  //         />
  //       </div>
  //     </div>
  //     <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass}`}>{message?.message}</div>
  //     <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{time}</div>
  //   </div>
  // )
  // return (
  //   <div className={`chat ${chatClassName}`}>
  //     <div className='chat-image avatar'>
  //       <div className='w-8 md:w-10 rounded-full'>
  //         <img 
  //           alt='bubble text component'
  //           src={profilePic} 
  //         />
  //       </div>
  //     </div>
  //     <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} text-sm md:text-base`}>
  //       {message?.message}
  //     </div>
  //     <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>
  //       {time}
  //     </div>
  //   </div>
  // )
  // return (
  //   <div className={`chat ${chatClassName}`}>
  //     <div className='chat-image avatar'>
  //       <div className='w-8 sm:w-9 md:w-10 rounded-full'>
  //         <img 
  //           alt='bubble text component'
  //           src={profilePic} 
  //           className='object-cover'
  //         />
  //       </div>
  //     </div>
  //     <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} text-xs sm:text-sm md:text-base max-w-xs sm:max-w-sm md:max-w-md break-words`}>
  //       {message?.message}
  //     </div>
  //     <div className='chat-footer opacity-50 text-[10px] xs:text-xs flex gap-1 items-center'>
  //       {time}
  //     </div>
  //   </div>
  // );

  // return (
  //   <div className={`chat ${chatClassName}`}>
  //     <div className='chat-image avatar'>
  //       <div className='w-8 sm:w-10 rounded-full'>
  //         <img 
  //           alt='message avatar'
  //           src={profilePic}
  //           className='object-cover w-full h-full'
  //         />
  //       </div>
  //     </div>
  //     <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} 
  //       break-words whitespace-pre-wrap 
  //       max-w-[85vw] sm:max-w-xs md:max-w-md 
  //       text-xs sm:text-sm md:text-base
  //       px-3 py-2`}>
  //       {message?.message}
  //     </div>
  //     <div className='chat-footer opacity-50 text-[10px] xs:text-xs flex gap-1 items-center mt-1'>
  //       {time}
  //     </div>
  //   </div>
  // )
  // return (
  //   <div className={`chat ${chatClassName} max-w-full`}>
  //     <div className='chat-image avatar'>
  //       <div className='w-8 sm:w-10 rounded-full'>
  //         <img 
  //           alt='message avatar'
  //           src={profilePic}
  //           className='object-cover w-full h-full'
  //         />
  //       </div>
  //     </div>
  //     <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} 
  //       break-all whitespace-pre-wrap 
  //       max-w-[90%] min-w-0
  //       text-xs sm:text-sm
  //       px-3 py-2
  //       overflow-hidden`}>
  //       {message?.message}
  //     </div>
  //     <div className='chat-footer opacity-50 text-[10px] xs:text-xs flex gap-1 items-center mt-1'>
  //       {time}
  //     </div>
  //   </div>
  // )

  return (
    <div className={`chat ${chatClassName}`}>
      <div className='chat-image avatar'>
        <div className='w-8 sm:w-10 rounded-full'>
          <img 
            alt='message avatar'
            src={profilePic}
            className='object-cover w-full h-full'
          />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} 
        whitespace-pre-wrap 
        break-words
        max-w-[90vw] sm:max-w-xs md:max-w-md
        text-xs sm:text-sm
        px-3 py-2
        overflow-x-hidden`}>
        {message?.message}
      </div>
      <div className='chat-footer opacity-50 text-[10px] xs:text-xs flex gap-1 items-center mt-1'>
        {time}
      </div>
    </div>
  )
}

export default Message