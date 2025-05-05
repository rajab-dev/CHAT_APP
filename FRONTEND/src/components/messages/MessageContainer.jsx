import { useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
	const {selectedConversation,setSelectedConversation} = useConversation()

	useEffect(() => {
		
		return () => {
			setSelectedConversation(null)
		};
	}, [setSelectedConversation]);
	
	// return (
	// 	<div className='md:min-w-[450px] flex flex-col'>
	// 	{!selectedConversation ? <NoChatSelected /> : (
	// 		<>
	// 			{/* Header */}
	// 			<div className='bg-slate-500 px-4 py-2 mb-2'>
	// 				<span className='label-text'>To:</span> <span className='text-gray-900 font-bold'>{selectedConversation?.fullName}</span>
	// 			</div>

	// 			<Messages />
	// 			<MessageInput />
	// 		</>
	// 	)}
	// 	</div>
	// // );
	// return (
	// 	<div className='flex flex-col w-full'>
	// 	  {!selectedConversation ? <NoChatSelected /> : (
	// 		<>
	// 		  {/* Header */}
	// 		  <div className='bg-slate-500 px-2 py-1 md:px-4 md:py-2 mb-1 md:mb-2'>
	// 			<span className='label-text text-xs md:text-sm'>To:</span> 
	// 			<span className='text-gray-900 font-bold text-sm md:text-base ml-1'>
	// 			  {selectedConversation?.fullName}
	// 			</span>
	// 		  </div>
	  
	// 		  <Messages />
	// 		  <MessageInput />
	// 		</>
	// 	  )}
	// 	</div>
	//   );
	return (
		<div className='flex flex-col w-full h-full'>
		  {!selectedConversation ? <NoChatSelected /> : (
			<>
			  {/* Header */}
			  <div className='bg-slate-500 px-3 py-2 sm:px-4 sm:py-3 flex items-center'>
				<span className='label-text text-xs sm:text-sm'>To:</span> 
				<span className='text-gray-900 font-bold text-sm sm:text-base ml-1 truncate'>
				  {selectedConversation?.fullName}
				</span>
			  </div>
	  
			  <Messages />
			  <MessageInput />
			</>
		  )}
		</div>
	  );
};
export default MessageContainer;


const NoChatSelected = () => {
	const { authUser } = useAuthContext();
	// return (
	// 	<div className='flex items-center justify-center w-full h-full'>
	// 		<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
	// 			<p>Welcome 👋 {authUser.fullName} ❄</p>
	// 			<p>Select a chat to start messaging</p>
	// 			<TiMessages className='text-3xl md:text-6xl text-center' />
	// 		</div>
	// 	</div>
	// );
	// return (
	// 	<div className='flex items-center justify-center w-full h-full'>
	// 	  <div className='px-2 text-center text-sm sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-1 md:gap-2'>
	// 		<p>Welcome 👋 {authUser.fullName} ❄</p>
	// 		<p className='text-xs sm:text-sm md:text-base'>Select a chat to start messaging</p>
	// 		<TiMessages className='text-2xl md:text-6xl text-center' />
	// 	  </div>
	// 	</div>
	//   );
	return (
		<div className='flex items-center justify-center w-full h-full p-4'>
		  <div className='text-center text-gray-200 font-semibold flex flex-col items-center gap-2'>
			<p className='text-sm sm:text-base md:text-lg'>
			  Welcome 👋 {authUser.fullName} ❄
			</p>
			<p className='text-xs sm:text-sm md:text-base'>
			  Select a chat to start messaging
			</p>
			<TiMessages className='text-2xl sm:text-4xl md:text-6xl' />
		  </div>
		</div>
	  );
	
};