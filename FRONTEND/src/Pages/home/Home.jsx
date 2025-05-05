import React from 'react'
import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

function Home() {
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
return (
	<div className='flex flex-row h-[calc(100vh-80px)] w-full max-w-6xl mx-auto rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
	  {/* Sidebar - Responsive width */}
	  <div className='w-32 sm:w-48 md:w-64 lg:w-80 flex-shrink-0 border-r border-slate-500 overflow-y-auto'>
		<Sidebar />
	  </div>
	  
	  {/* Message Container */}
	  <div className='flex-grow flex flex-col'>
		<MessageContainer />
	  </div>
	</div>
  );
}

export default Home