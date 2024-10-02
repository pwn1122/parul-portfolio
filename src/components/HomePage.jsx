import React from 'react'
import { Link } from 'react-router-dom'
function HomePage({setShowMenu}){
  return (
    <section className='menuLink'>
        <span className='close-btn' onClick={()=> setShowMenu(true)}>Close</span>
        <div className='homePage'>
            <div className='mainLink'>
            <p><Link to={'/'}>Home</Link></p>
            <p><Link to={'/About'}>About</Link></p>
            <p><Link to={'/Blog'}>Blog</Link></p>
            <span><Link to={''}>Linkedin</Link></span>
            <span><Link to={'https://www.instagram.com/parul_graphix?igsh=NXVjbXZwcmw3Mjly'}>Instagram</Link></span>
            </div>
        </div>
    </section>
  )
}

export default HomePage
