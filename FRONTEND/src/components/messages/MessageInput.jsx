import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";
import toast from "react-hot-toast";

const MessageInput = () => {
	const [message, setMessage] = useState("")
 const {loading, sendMessage}=useSendMessage()

	const handleSendMessage = async (e) => {
		e.preventDefault();
		if(message==="" || message===null || message===undefined ){
			return toast.error("not valid message to send")
		}
		  // console.log(message)
		await	sendMessage(message)
		setMessage("")
	}


	// return (
	// 	<form onSubmit={handleSendMessage} className='px-4 my-3'>
	// 		<div className='w-full relative'>
	// 			<input
	// 				type='text'
	// 				className='border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white'
	// 				placeholder='Send a message'
	// 				onChange={(e)=> setMessage(e.target.value)}
	// 				value={message}

	// 			/>
	// 			<button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
	// 				{loading ? <div className="loading loading-spinner"></div> : <BsSend />}
	// 			</button>
	// 		</div>
	// 	</form>
	// );
	// return (
	// 	<form onSubmit={handleSendMessage} className='px-2 md:px-4 my-2 md:my-3'>
	// 	  <div className='w-full relative'>
	// 		<input
	// 		  type='text'
	// 		  className='border text-sm rounded-lg block w-full p-2 bg-gray-700 border-gray-600 text-white'
	// 		  placeholder='Send a message'
	// 		  onChange={(e)=> setMessage(e.target.value)}
	// 		  value={message}
	// 		/>
	// 		<button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
	// 		  {loading ? <div className="loading loading-spinner"></div> : <BsSend />}
	// 		</button>
	// 	  </div>
	// 	</form>
	//   );
	return (
		<form onSubmit={handleSendMessage} className='px-2 sm:px-3 md:px-4 py-2 sm:py-3'>
		  <div className='w-full relative'>
			<input
			  type='text'
			  className='border text-sm rounded-lg block w-full p-2 pr-10 bg-gray-700 border-gray-600 text-white'
			  placeholder='Send a message'
			  onChange={(e)=> setMessage(e.target.value)}
			  value={message}
			/>
			<button 
			  type='submit' 
			  className='absolute inset-y-0 end-0 flex items-center pe-2 sm:pe-3'
			>
			  {loading ? (
				<span className="loading loading-spinner loading-xs sm:loading-sm"></span>
			  ) : (
				<BsSend className='text-sm sm:text-base' />
			  )}
			</button>
		  </div>
		</form>
	  );
};
export default MessageInput;