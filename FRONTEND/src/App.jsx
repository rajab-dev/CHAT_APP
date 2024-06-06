import React from 'react'
import LogIn from './Pages/Login/LogIn'
import Signup from './Pages/Signup/Signup'
import Home from './Pages/home/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Toaster } from "react-hot-toast"
import { useAuthContext } from './context/AuthContext.jsx'

function App() {

  const{authUser} = useAuthContext()
  return (
    <>
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path='/' element={ authUser ? <Home /> : <Navigate to={'/log-in'} /> } />
        <Route path='/log-in' element={ authUser ? <Navigate to={'/'} /> : <LogIn /> } />
        <Route path='/sign-up' element={ authUser ? <Navigate to={'/'} /> : <Signup /> } />
      </Routes>
      <Toaster/>
    </div>
</>
  )
}
export default App