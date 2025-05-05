import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import toast from 'react-hot-toast'
import useConversation from "../../zustand/useConversation";
import useGetConversation from "../../hooks/useGetConversation";


const SearchInput = () => {
	const [search, setSearch] = useState("")
	const { setSelectedConversation } = useConversation()
  const { conversations } = useGetConversation()
	const handleSearch = async (e) => {
      e.preventDefault();
			// console.log("searched value",search)
			if(!search){
				return
			}

			if(search.length < 3){
			 return	toast.error("Searched term must be greater than 3 characters")
			}

			const conversation = conversations.find((c)=>c?.fullName?.toLowerCase().includes(search.toLocaleLowerCase()))

			if(conversation){
				setSelectedConversation(conversation)
				setSearch("");
			}else {
				 toast.error("NO such user found!!!")
			}
	}

	// return (
	// 	<form onSubmit={handleSearch} className='flex items-center gap-2'>
	// 		<input type='text' placeholder='Search…' className='input input-bordered rounded-full' 
	// 			value={search}
	// 			onChange={(e)=>setSearch(e.target.value)}
	// 		/>
	// 		<button type='submit' className='btn btn-circle bg-sky-500 text-white'>
	// 			<IoSearchSharp className='w-6 h-6 outline-none' />
	// 		</button>
	// 	</form>
	// );
	// return (
	// 	<form onSubmit={handleSearch} className='flex items-center gap-1 md:gap-2'>
	// 	  <input 
	// 		type='text' 
	// 		placeholder='Search…' 
	// 		className='input input-bordered rounded-full text-sm md:text-base w-full'
	// 		value={search}
	// 		onChange={(e)=>setSearch(e.target.value)}
	// 	  />
	// 	  <button type='submit' className='btn btn-circle bg-sky-500 text-white p-1 md:p-2'>
	// 		<IoSearchSharp className='w-4 h-4 md:w-6 md:h-6 outline-none' />
	// 	  </button>
	// 	</form>
	//   );
	// return (
	// 	<form onSubmit={handleSearch} className='flex items-center gap-1 sm:gap-2'>
	// 	  <input 
	// 		type='text' 
	// 		placeholder='Search…' 
	// 		className='input input-bordered rounded-full text-xs sm:text-sm w-full'
	// 		value={search}
	// 		onChange={(e)=>setSearch(e.target.value)}
	// 	  />
	// 	  <button 
	// 		type='submit' 
	// 		className='btn btn-circle bg-sky-500 text-white p-1 sm:p-2'
	// 	  >
	// 		<IoSearchSharp className='w-3 h-3 sm:w-4 sm:h-4' />
	// 	  </button>
	// 	</form>
	//   );
	// return (
	// 	<form onSubmit={handleSearch} className='flex items-center'>
	// 	  {/* Hide label on mobile */}
	// 	  <div className='hidden sm:block flex-grow'>
	// 		<input 
	// 		  type='text' 
	// 		  placeholder='Search…' 
	// 		  className='input input-bordered rounded-full text-xs w-full'
	// 		  value={search}
	// 		  onChange={(e)=>setSearch(e.value)}
	// 		/>
	// 	  </div>
	// 	  {/* Always show search icon */}
	// 	  <button type='submit' className='btn btn-circle btn-sm bg-sky-500 text-white ml-1'>
	// 		<IoSearchSharp className='w-3 h-3 sm:w-4 sm:h-4' />
	// 	  </button>
	// 	</form>
	//   );
	return (
		<form onSubmit={handleSearch} className='flex items-center gap-1'>
		  <input 
			type='text' 
			placeholder='Search...' 
			className='input input-bordered rounded-full text-xs w-full p-2'
			value={search}
			onChange={(e)=>setSearch(e.target.value)}
		  />
		  <button type='submit' className='btn btn-circle btn-sm bg-sky-500 text-white'>
			<IoSearchSharp className='w-3 h-3' />
		  </button>
		</form>
	  );
};
export default SearchInput;