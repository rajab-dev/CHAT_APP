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


	return (
		<form onSubmit={handleSendMessage} className='px-4 my-3'>
			<div className='w-full relative'>
				<input
					type='text'
					className='border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white'
					placeholder='Send a message'
					onChange={(e)=> setMessage(e.target.value)}
					value={message}

				/>
				<button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
					{loading ? <div className="loading loading-spinner"></div> : <BsSend />}
				</button>
			</div>
		</form>
	);
};
export default MessageInput;