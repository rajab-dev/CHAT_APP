import { useEffect, useState } from "react";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = ({ onClose, setSelectedConversation }) => {
	// const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	// const [selectedConversation, setSelectedConversation] = useState(null);
	// const [isMobile, setIsMobile] = useState(false);
  
	// Handle conversation selection
	
	// return (
	// 	<div className='border-r border-slate-500 p-4 flex flex-col'>
	// 		<SearchInput />
	// 		<div className='divider px-3'></div>
	// 		<Conversations />
	// 		<LogoutButton />
	// 	</div>
	// );
	// return (
	// 	<div className='border-r border-slate-500 p-2 md:p-4 flex flex-col h-full'>
	// 	  <SearchInput />
	// 	  <div className='divider px-1 md:px-3'></div>
	// 	  <Conversations />
	// 	  <LogoutButton />
	// 	</div>
	//   );
	// return (
	// 	<div className='border-r border-slate-500 p-2 sm:p-3 md:p-4 flex flex-col h-full w-full sm:w-64 md:w-80'>
	// 	  <SearchInput />
	// 	  <div className='divider px-1 sm:px-2'></div>
	// 	  <Conversations />
	// 	  <LogoutButton />
	// 	</div>
	//   );
	// return (
	// 	<div className='p-1 sm:p-2 md:p-4 flex flex-col h-full'>
	// 	  {/* Compact search on mobile */}
	// 	  <div className='hidden sm:block'>
	// 		<SearchInput />
	// 		<div className='divider px-1 sm:px-2'></div>
	// 	  </div>
		  
	// 	  {/* Conversations - Always visible */}
	// 	  <Conversations />
		  
	// 	  {/* Logout button at bottom */}
	// 	  <LogoutButton />
	// 	</div>
	//   );

	// return (
	// 	<div className='p-2 flex flex-col h-full'>
	// 	  {/* Always visible search */}
	// 	  <SearchInput />
	// 	  <div className='divider px-1'></div>
		  
	// 	  {/* Conversations - Always show names */}
	// 	  <Conversations />
		  
	// 	  {/* Logout button */}
	// 	  <LogoutButton />
	// 	</div>
	//   );

	// return (
	// 	<div className='p-2 flex flex-col h-full'>
	// 	  {/* Close button for mobile */}
	// 	  <button 
	// 		className="md:hidden self-end p-1 mb-2 rounded-md hover:bg-gray-200"
	// 		onClick={onClose}
	// 	  >
	// 		<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
	// 		  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
	// 		</svg>
	// 	  </button>
		  
	// 	  {/* Rest of your sidebar content */}
	// 	  <SearchInput />
	// 	  <div className='divider px-1'></div>
	// 	  <Conversations />
	// 	  <LogoutButton />
	// 	</div>
	//   );

	const handleConversationSelect = (conversation) => {
		setSelectedConversation(conversation);
		if (window.innerWidth < 768) {
		  onClose();
		}
	  };
	
	  return (
		<div className='p-2 flex flex-col h-full'>
		  {/* Close button for mobile */}
		  <button 
			className="md:hidden self-end p-1 mb-2 rounded-md hover:bg-gray-200"
			onClick={onClose}
			aria-label="Close menu"
		  >
			<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
			  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
			</svg>
		  </button>
		  
		  {/* Rest of your sidebar content */}
		  <SearchInput />
		  <div className='divider px-1'></div>
		  <Conversations onSelectConversation={handleConversationSelect} />
		  <LogoutButton />
		</div>
	  );
};
export default Sidebar;