import React from 'react'
import MessageContainer, { NoChatSelected } from "../../components/messages/MessageContainer";
// import  from "../../components/messages/";
import Sidebar from "../../components/sidebar/Sidebar";
import { FiMenu, FiX } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import useConversation from '../../zustand/useConversation';

function Home() {
	// const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	// const [selectedConversation, setSelectedConversation] = useState(null);
  
	// // Close sidebar when conversation is selected (mobile only)
	// const handleSelectConversation = (conversation) => {
	//   setSelectedConversation(conversation);
	//   if (window.innerWidth < 640) { // Mobile breakpoint
	// 	setIsSidebarOpen(false);
	//   }
	// };
  
	// // Responsive sidebar state
	// useEffect(() => {
	//   const handleResize = () => {
	// 	if (window.innerWidth >= 640) { // Desktop
	// 	  setIsSidebarOpen(true);
	// 	} else { // Mobile
	// 	  setIsSidebarOpen(false);
	// 	}
	//   };
  
	//   handleResize(); // Set initial state
	//   window.addEventListener('resize', handleResize);
	//   return () => window.removeEventListener('resize', handleResize);
	// }, []);
  
	// return (
	//   <div className="flex flex-col sm:flex-row h-screen bg-gray-100">
	// 	{/* Mobile Header with Hamburger */}
	// 	<div className="sm:hidden bg-slate-700 p-3 flex items-center">
	// 	  <button 
	// 		onClick={() => setIsSidebarOpen(!isSidebarOpen)}
	// 		className="text-white p-1"
	// 	  >
	// 		{isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
	// 	  </button>
	// 	  <h1 className="text-white ml-4 font-semibold">
	// 		{selectedConversation?.fullName || 'Messages'}
	// 	  </h1>
	// 	</div>
  
	// 	{/* Sidebar */}
	// 	<div className={`
	// 	  ${isSidebarOpen ? 'block' : 'hidden'} 
	// 	  sm:block w-full sm:w-64 bg-slate-800 text-white
	// 	  h-full overflow-y-auto
	// 	`}>
	// 	  <Sidebar 
	// 		onSelectConversation={handleSelectConversation}
	// 		selectedConversation={selectedConversation}
	// 	  />
	// 	</div>
  
	// 	{/* Main Content */}
	// 	<div className="flex-1 flex flex-col h-full">
		  
	// 		<MessageContainer conversation={selectedConversation} />
		
		  
	// 	</div>
	//   </div>
	// );
//   return (
// 		<div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
// 			<Sidebar />
// 			<MessageContainer />
// 		</div>
// 	);
// return (
// 	<div className='flex flex-col sm:flex-row h-[calc(100vh-80px)] sm:h-[450px] md:h-[550px] lg:h-[650px] w-full max-w-6xl mx-auto rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
// 	  <Sidebar />
// 	  <MessageContainer />
// 	</div>
//   );
// return (
// 	<div className='flex flex-row h-[calc(100vh-80px)] w-full max-w-6xl mx-auto rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
// 	  {/* Sidebar - Fixed width on mobile, expands on larger screens */}
// 	  <div className='w-20 sm:w-32 md:w-64 lg:w-80 flex-shrink-0 border-r border-slate-500'>
// 		<Sidebar />
// 	  </div>
	  
// 	  {/* Message Container - Flex-grow to take remaining space */}
// 	  <div className='flex-grow flex flex-col'>
// 		<MessageContainer />
// 	  </div>
// 	</div>
//   );
// return (
// 	<div className='flex flex-row h-[calc(100vh-80px)] w-full max-w-6xl mx-auto rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
// 	  {/* Sidebar - Responsive width */}
// 	  <div className='w-32 sm:w-48 md:w-64 lg:w-80 flex-shrink-0 border-r border-slate-500 overflow-y-auto'>
// 		<Sidebar />
// 	  </div>
	  
// 	  {/* Message Container */}
// 	  <div className='flex-grow flex flex-col'>
// 		<MessageContainer />
// 	  </div>
// 	</div>
//   );

// const [sidebarOpen, setSidebarOpen] = useState(true);
// const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   return (
//     <div className='flex flex-row h-[calc(100vh-80px)] w-full max-w-6xl mx-auto rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//       {/* Hamburger button for mobile */}
//       <button 
//         className="md:hidden fixed left-2 top-0 z-50 p-2 rounded-md text-gray-700 bg-gray-200"
//         onClick={() => setSidebarOpen(!sidebarOpen)}
//       >
//         <svg 
//           xmlns="http://www.w3.org/2000/svg" 
//           className="h-6 w-6" 
//           fill="none" 
//           viewBox="0 0 24 24" 
//           stroke="currentColor"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//         </svg>
//       </button>

//       {/* Sidebar - Responsive width */}
//       <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:static inset-y-0 left-0 z-40 w-64 flex-shrink-0 border-r border-slate-500 overflow-y-auto bg-white dark:bg-gray-800 transition-transform duration-300 ease-in-out`}>
//         <Sidebar />
//       </div>
      
//       {/* Message Container */}
//       <div className='flex-grow flex flex-col'>
//         <MessageContainer />
//       </div>
//     </div>
//   );

// return (
//     <div className='flex flex-row h-[calc(100vh-80px)] w-full max-w-6xl mx-auto rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//       {/* Sidebar - Responsive with transitions */}
//       <div className={`
//         ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
//         md:translate-x-0 fixed md:relative inset-y-0 left-0 z-30 
//         w-64 flex-shrink-0 border-r border-slate-500 overflow-y-auto 
//         bg-white dark:bg-gray-800 transition-transform duration-300 ease-in-out
//       `}>
//         <Sidebar onClose={() => setSidebarOpen(false)} />
//       </div>
      
//       {/* Hamburger button positioned beside the sidebar */}
//       {!sidebarOpen && (
//         <button 
//           className="md:hidden fixed left-2 top-[50%] transform -translate-y-1/2 z-40 p-2 rounded-md text-gray-700 bg-gray-200 shadow-md"
//           onClick={toggleSidebar}
//         >
//           <svg 
//             xmlns="http://www.w3.org/2000/svg" 
//             className="h-6 w-6" 
//             fill="none" 
//             viewBox="0 0 24 24" 
//             stroke="currentColor"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//           </svg>
//         </button>
//       )}

//       {/* Message Container */}
//       <div className='flex-grow flex flex-col'>
//         <MessageContainer />
//       </div>
//     </div>
//   );

const [sidebarOpen, setSidebarOpen] = useState(true);
// const [selectedConversation, setSelectedConversation] = useState(null); // Local state if you don't have context
const {selectedConversation,setSelectedConversation} = useConversation()

// Auto-close sidebar when conversation is selected on mobile
useEffect(() => {
//   if (selectedConversation && window.innerWidth < 768) {
// 	setSidebarOpen(false);
//   }
if (selectedConversation && window.innerWidth < 768) {
	setSidebarOpen(false);
  }
}, [selectedConversation]);

const toggleSidebar = () => {
  setSidebarOpen(!sidebarOpen);
};

return (
  <div className='relative flex flex-row h-[calc(100vh-80px)] w-full max-w-6xl mx-auto rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
	{/* Semi-transparent overlay for mobile */}
	{sidebarOpen && (
	  <div 
		className="md:hidden fixed inset-0 z-20 bg-black bg-opacity-50"
		onClick={toggleSidebar}
	  />
	)}

	{/* Sidebar */}
	<div className={`
	  ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
	  md:translate-x-0 fixed md:relative inset-y-0 left-0 z-30 
	  w-64 flex-shrink-0 border-r border-slate-500 overflow-y-auto 
	  bg-white dark:bg-gray-800 transition-transform duration-300 ease-in-out
	`}>
	  <Sidebar 
		onClose={() => setSidebarOpen(false)} 
		setSelectedConversation={setSelectedConversation} 
	  />
	</div>
	
	{/* Hamburger button - positioned properly */}
	{!sidebarOpen && (
	//   <button 
	// 	className="md:hidden fixed left-4 top-4 z-40 p-2 rounded-md text-gray-700 bg-gray-200 shadow-md hover:bg-gray-300 transition-colors"
	// 	onClick={toggleSidebar}
	// 	aria-label="Open menu"
	//   >
	// 	<svg 
	// 	  xmlns="http://www.w3.org/2000/svg" 
	// 	  className="h-6 w-6" 
	// 	  fill="none" 
	// 	  viewBox="0 0 24 24" 
	// 	  stroke="currentColor"
	// 	>
	// 	  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
	// 	</svg>
	//   </button>
	
	<div className="sm:hidden" style={{ position: 'fixed', top: '0', left: '0', zIndex: '40' , height:'4%'}}>
	<button 
			onClick={toggleSidebar}
			className="text-white p-1"
		  >
			 <FiMenu size={24} className='text-grey-500' />
		  </button>
		  </div>
		   
	)}

	{/* Message Container */}
	<div className='flex-grow flex flex-col'>
	  <MessageContainer 
		selectedConversation={selectedConversation} 
		setSelectedConversation={setSelectedConversation}
	  />
	</div>
  </div>
);
}

export default Home