import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const navTags = [
        {name: 'Home', path: '/'},
        {name: 'About', path: '/about'},
        {name: 'Services', path: '/services'},
        {name: 'Contacts', path: '/contacts'},
    ]
  return (
   
    <nav className= "navbar">

        <h1 className='nav-heading'>Logo</h1>
        <ul className= 'nav-lists'>
            {navTags.map((item, index)=>{
                return <li key={item.name}>
                    <Link to={item.path}>{item.name}</Link>
                </li>
            })}

        </ul>
        

    </nav>
    

    
  )
}

export default Navbar