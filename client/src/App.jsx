import React from 'react'
import {createBrowserRouter} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Layout from './layout/layout.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Contacts from './pages/Contacts.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children : [
      {
      path: "/",
      element: <LandingPage/>
    },
      {
      path: "/about",
      element: <About/>
    },
      {
      path: "/services",
      element: <Services/>
    },
      {
      path: "/contacts",
      element: <Contacts/>
    },
  
  
  ]
  }

])

export default router
