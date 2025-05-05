import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({conversation, lastIdx, emoji}) => {


	const{selectedConversation, setSelectedConversation}= useConversation();
	 const isSelected = selectedConversation?._id === conversation?._id
	 const { onlineUsers } = useSocketContext()
	 const isOnline = onlineUsers.includes(conversation._id)

	// return (
	// 	<>
	// 		<div 
	// 		className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
	// 		 ${ isSelected ? 'bg-sky-500' : "" }
	// 		`}
	// 		 onClick={()=>setSelectedConversation(conversation)}
	// 		>
	// 			<div className={`avatar ${isOnline ? 'online' : 'offline'}`}>
	// 				<div className='w-12 rounded-full'>
	// 					<img
	// 						src={conversation?.profilePic}
	// 						alt='user avatar'
	// 					/>
	// 				</div>
	// 			</div>

	// 			<div className='flex flex-col flex-1'>
	// 				<div className='flex gap-3 justify-between'>
	// 					<p className='font-bold text-gray-200'>{conversation?.fullName}</p>
	// 					<span className='text-xl'>{emoji}</span>
	// 				</div>
	// 			</div>
	// 		</div>

	// 		{lastIdx ? null : <div className='divider my-0 py-0 h-1' />}
	// 	</>
	// );
	// return (
	// 	<>
	// 	  <div 
	// 		className={`flex gap-1 md:gap-2 items-center hover:bg-sky-500 rounded p-1 md:p-2 py-0.5 md:py-1 cursor-pointer
	// 		  ${isSelected ? 'bg-sky-500' : ""}
	// 		`}
	// 		onClick={() => setSelectedConversation(conversation)}
	// 	  >
	// 		<div className={`avatar ${isOnline ? 'online' : 'offline'}`}>
	// 		  <div className='w-8 md:w-12 rounded-full'>
	// 			<img
	// 			  src={conversation?.profilePic}
	// 			  alt='user avatar'
	// 			/>
	// 		  </div>
	// 		</div>
	  
	// 		<div className='flex flex-col flex-1'>
	// 		  <div className='flex gap-1 md:gap-3 justify-between'>
	// 			<p className='font-bold text-gray-200 text-sm md:text-base'>
	// 			  {conversation?.fullName}
	// 			</p>
	// 			<span className='text-lg md:text-xl'>{emoji}</span>
	// 		  </div>
	// 		</div>
	// 	  </div>
	  
	// 	  {lastIdx ? null : <div className='divider my-0 py-0 h-0.5 md:h-1' />}
	// 	</>
	//   );

	// return (
	// 	<>
	// 	  <div 
	// 		className={`flex gap-2 items-center hover:bg-sky-500 rounded p-1 sm:p-2 cursor-pointer
	// 		  ${isSelected ? 'bg-sky-500' : ""}
	// 		`}
	// 		onClick={() => setSelectedConversation(conversation)}
	// 	  >
	// 		<div className={`avatar ${isOnline ? 'online' : 'offline'}`}>
	// 		  <div className='w-8 sm:w-10 md:w-12 rounded-full'>
	// 			<img
	// 			  src={conversation?.profilePic}
	// 			  alt='user avatar'
	// 			  className='object-cover'
	// 			/>
	// 		  </div>
	// 		</div>
	  
	// 		<div className='flex flex-col flex-1 min-w-0'>
	// 		  <div className='flex gap-1 sm:gap-2 justify-between'>
	// 			<p className='font-bold text-gray-200 text-xs sm:text-sm md:text-base truncate'>
	// 			  {conversation?.fullName}
	// 			</p>
	// 			<span className='text-sm sm:text-lg md:text-xl'>{emoji}</span>
	// 		  </div>
	// 		</div>
	// 	  </div>
	  
	// 	  {lastIdx ? null : <div className='divider my-0 py-0 h-0.5' />}
	// 	</>
	//   );

	// return (
	// 	<>
	// 	  <div 
	// 		className={`flex gap-1 sm:gap-2 items-center hover:bg-sky-500 rounded p-1 cursor-pointer
	// 		  ${isSelected ? 'bg-sky-500' : ""}
	// 		`}
	// 		onClick={() => setSelectedConversation(conversation)}
	// 	  >
	// 		{/* Avatar always visible */}
	// 		<div className={`avatar ${isOnline ? 'online' : 'offline'}`}>
	// 		  <div className='w-8 sm:w-10 md:w-12 rounded-full'>
	// 			<img src={conversation?.profilePic} alt='user avatar' />
	// 		  </div>
	// 		</div>
	  
	// 		{/* Name hidden on mobile, shown on sm+ */}
	// 		<div className='hidden sm:block flex-grow min-w-0'>
	// 		  <div className='flex justify-between items-center'>
	// 			<p className='font-bold text-gray-200 text-sm truncate'>
	// 			  {conversation?.fullName}
	// 			</p>
	// 			<span className='text-lg'>{emoji}</span>
	// 		  </div>
	// 		</div>
	// 	  </div>
	  
	// 	  {lastIdx ? null : <div className='divider my-0 py-0 h-0.5' />}
	// 	</>
	//   );
	return (
		<>
		  <div 
			className={`flex gap-2 items-center hover:bg-sky-500 rounded p-1 cursor-pointer
			  ${isSelected ? 'bg-sky-500' : ""}
			`}
			onClick={() => setSelectedConversation(conversation)}
		  >
			<div className={`avatar ${isOnline ? 'online' : 'offline'}`}>
			  <div className='w-8 rounded-full'>
				<img src={conversation?.profilePic} alt='user avatar' />
			  </div>
			</div>
	  
			{/* Always visible name with truncation */}
			<div className='flex-grow min-w-0'>
			  <p className='font-bold text-gray-200 text-xs truncate'>
				{conversation?.fullName}
			  </p>
			</div>
			
			{/* Emoji indicator */}
			<span className='text-sm'>{emoji}</span>
		  </div>
	  
		  {lastIdx ? null : <div className='divider my-0 py-0 h-0.5' />}
		</>
	  );
};
export default Conversation;