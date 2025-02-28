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

	return (
		<form onSubmit={handleSearch} className='flex items-center gap-2'>
			<input type='text' placeholder='Search…' className='input input-bordered rounded-full' 
				value={search}
				onChange={(e)=>setSearch(e.target.value)}
			/>
			<button type='submit' className='btn btn-circle bg-sky-500 text-white'>
				<IoSearchSharp className='w-6 h-6 outline-none' />
			</button>
		</form>
	);
};
export default SearchInput;