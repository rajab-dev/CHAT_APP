import React from 'react'
import {BiLogOut} from "react-icons/bi"
import useLogOut from '../../hooks/useLogOut'
const LogoutButton = () => {
  const {loading, logout} = useLogOut();
  // return (
  //   <div className='mt-auto '>
  //   {loading ? <span className='loading loading-spinner'></span> : <BiLogOut className='w-6 h-6 text-white cursor-pointer' onClick={ logout } />}
     
  //   </div>
  // )
  return (
    <div className='mt-auto'>
      {loading ? (
        <span className='loading loading-spinner'></span>
      ) : (
        <BiLogOut 
          className='w-5 h-5 md:w-6 md:h-6 text-white cursor-pointer' 
          onClick={logout} 
        />
      )}
    </div>
  );
}

export default LogoutButton