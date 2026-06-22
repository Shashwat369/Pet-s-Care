import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <>
     <Navbar/>
     <main>
        <Outlet/>
        
     </main>
     </>
  )
}

export default UserLayout