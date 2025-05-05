import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
	const {loading, messages} = useGetMessages()
	// console.log("messages",messages)
	useListenMessages();
	const lastMessageRef = useRef()
	

	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({behavior:"smooth"})
		}, 100);
		
	}, [messages]);


	// return (
	// 	<div className='px-4 flex-1 overflow-auto'>

	// 	{!loading && messages.length >0 && messages.map((message)=>(
	// 		<div key={message._id} ref={lastMessageRef} >
	// 		<Message  message={message}/>
	// 		</div>
	// 	))}
			
	// 		{loading && [...Array(3)].map((_,idx) => <MessageSkeleton  key={idx}/>)}

	// 		{!loading && messages.length ===0 &&(<p className="text-center">Send a message to start the  conversation</p>)}
	// 	</div>
	// );
	// return (
	// 	<div className='px-2 md:px-4 flex-1 overflow-auto'>
	// 	  {!loading && messages.length > 0 && messages.map((message) => (
	// 		<div key={message._id} ref={lastMessageRef}>
	// 		  <Message message={message}/>
	// 		</div>
	// 	  ))}
		  
	// 	  {loading && [...Array(3)].map((_,idx) => <MessageSkeleton key={idx}/>)}
	  
	// 	  {!loading && messages.length === 0 && (
	// 		<p className="text-center text-sm md:text-base">
	// 		  Send a message to start the conversation
	// 		</p>
	// 	  )}
	// 	</div>
	//   );
	// return (
	// 	<div className='px-2 sm:px-3 md:px-4 flex-1 overflow-auto'>
	// 	  {!loading && messages.length > 0 && messages.map((message) => (
	// 		<div key={message._id} ref={lastMessageRef} className='mb-2 last:mb-0'>
	// 		  <Message message={message}/>
	// 		</div>
	// 	  ))}
		  
	// 	  {loading && [...Array(3)].map((_,idx) => (
	// 		<div key={idx} className='mb-2 last:mb-0'>
	// 		  <MessageSkeleton />
	// 		</div>
	// 	  ))}
	  
	// 	  {!loading && messages.length === 0 && (
	// 		<p className="text-center text-sm sm:text-base mt-4">
	// 		  Send a message to start the conversation
	// 		</p>
	// 	  )}
	// 	</div>
	//   );

	return (
		<div className='px-2 sm:px-4 flex-1 overflow-auto'>
		  <div className='flex flex-col gap-1 py-1'>
			{!loading && messages.length > 0 && messages.map((message) => (
			  <div key={message._id} ref={lastMessageRef}>
				<Message message={message}/>
			  </div>
			))}
			
			{loading && [...Array(3)].map((_,idx) => <MessageSkeleton key={idx}/>)}
	  
			{!loading && messages.length === 0 && (
			  <p className="text-center text-sm py-4">Send a message to start the conversation</p>
			)}
		  </div>
		</div>
	  )
};
export default Messages;