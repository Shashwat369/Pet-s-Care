import React from 'react'
import './Navbar.css'

const Navbar = () => {
    const navTags = [
        {name: 'Home', path: '/'},
        {name: 'About', path: '/about'},
        {name: 'Services', path: '/services'},
    ]
  return (
   
    <nav className= "navbar">

        <h1 className='nav-heading'>Logo</h1>
        <ul className= 'nav-lists'>
            {navTags.map((item, index)=>{
                return <li key={index}>{item.name}</li>
            })}

        </ul>
        

    </nav>
    

    
  )
}

export default Navbar