const MessageSkeleton = () => {
	// return (
	// 	<>
	// 		<div className='flex gap-3 items-center'>
	// 			<div className='skeleton w-10 h-10 rounded-full shrink-0'></div>
	// 			<div className='flex flex-col gap-1'>
	// 				<div className='skeleton h-4 w-40'></div>
	// 				<div className='skeleton h-4 w-40'></div>
	// 			</div>
	// 		</div>
	// 		<div className='flex gap-3 items-center justify-end'>
	// 			<div className='flex flex-col gap-1'>
	// 				<div className='skeleton h-4 w-40'></div>
	// 			</div>
	// 			<div className='skeleton w-10 h-10 rounded-full shrink-0'></div>
	// 		</div>
	// 	</>
	// );
	return (
		<>
		  {/* Incoming message skeleton */}
		  <div className='flex gap-2 md:gap-3 items-center mb-2 md:mb-3'>
			<div className='skeleton w-8 h-8 md:w-10 md:h-10 rounded-full shrink-0'></div>
			<div className='flex flex-col gap-1'>
			  <div className='skeleton h-3 md:h-4 w-32 md:w-40'></div>
			  <div className='skeleton h-3 md:h-4 w-24 md:w-40'></div>
			  <div className='skeleton h-3 md:h-4 w-32 md:w-40'></div>
			</div>
		  </div>

		  
		  {/* Outgoing message skeleton */}
		  <div className='flex gap-2 md:gap-3 items-center justify-end mb-2 md:mb-3'>
			<div className='flex flex-col gap-1 items-end'>
			  <div className='skeleton h-3 md:h-4 w-32 md:w-40'></div>
			  <div className='skeleton h-3 md:h-4 w-32 md:w-40'></div>
			</div>
			
			<div className='skeleton w-8 h-8 md:w-10 md:h-10 rounded-full shrink-0'></div>
		  </div>


		  		  {/* Incoming message skeleton */}
					<div className='flex gap-2 md:gap-3 items-center mb-2 md:mb-3'>
			<div className='skeleton w-8 h-8 md:w-10 md:h-10 rounded-full shrink-0'></div>
			<div className='flex flex-col gap-1'>
			  <div className='skeleton h-3 md:h-4 w-32 md:w-40'></div>
			  <div className='skeleton h-3 md:h-4 w-24 md:w-40'></div>
			  {/* <div className='skeleton h-3 md:h-4 w-32 md:w-40'></div> */}
			</div>
		  </div>

		  
		  {/* Outgoing message skeleton */}
		  <div className='flex gap-2 md:gap-3 items-center justify-end mb-2 md:mb-3'>
			<div className='flex flex-col gap-1 items-end'>
			  <div className='skeleton h-3 md:h-4 w-32 md:w-40'></div>
			  <div className='skeleton h-3 md:h-4 w-32 md:w-40'></div>
			  <div className='skeleton h-3 md:h-4 w-32 md:w-40'></div>
			</div>
			
			<div className='skeleton w-8 h-8 md:w-10 md:h-10 rounded-full shrink-0'></div>
		  </div>


		   {/* Incoming message skeleton */}
		   <div className='flex gap-2 md:gap-3 items-center mb-2 md:mb-3'>
			<div className='skeleton w-8 h-8 md:w-10 md:h-10 rounded-full shrink-0'></div>
			<div className='flex flex-col gap-1'>
			  <div className='skeleton h-3 md:h-4 w-32 md:w-40'></div>
			  <div className='skeleton h-3 md:h-4 w-24 md:w-40'></div>
			  {/* <div className='skeleton h-3 md:h-4 w-32 md:w-40'></div> */}
			</div>
		  </div>

		  
		  {/* Outgoing message skeleton */}
		  <div className='flex gap-2 md:gap-3 items-center justify-end mb-2 md:mb-3'>
			<div className='flex flex-col gap-1 items-end'>
			  <div className='skeleton h-3 md:h-4 w-32 md:w-40'></div>
			  <div className='skeleton h-3 md:h-4 w-32 md:w-40'></div>
			  <div className='skeleton h-3 md:h-4 w-32 md:w-40'></div>
			</div>
			
			<div className='skeleton w-8 h-8 md:w-10 md:h-10 rounded-full shrink-0'></div>
		  </div>
		</>
	  );
};
export default MessageSkeleton;