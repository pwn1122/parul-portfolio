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
            <span className='linkdin'><Link to={'https://www.linkedin.com/in/parul-hudda-280b73330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'}>Linkedin</Link></span>
            <span className='insta'><Link to={'https://www.instagram.com/_parul_hudda?igsh=NXVjbXZwcmw3Mjly'}>Instagram</Link></span>
            </div>
        </div>
    </section>
  )
}

export default HomePage
