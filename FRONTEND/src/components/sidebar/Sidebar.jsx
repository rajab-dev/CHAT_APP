import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
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

	return (
		<div className='p-2 flex flex-col h-full'>
		  {/* Always visible search */}
		  <SearchInput />
		  <div className='divider px-1'></div>
		  
		  {/* Conversations - Always show names */}
		  <Conversations />
		  
		  {/* Logout button */}
		  <LogoutButton />
		</div>
	  );
};
export default Sidebar;