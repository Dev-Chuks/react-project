import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        

        <div className='nav-list'>
            <div className='snap'>
                
                <h1>snap</h1>
            
            </div>

            <nav>
                <ul>
                    <li>Features</li>
                    <li>Company</li>
                    <a href=''><li>Career</li></a>
                    <a href=''><li>About</li></a>

                </ul>
            </nav>
            
        </div>

        <div className='login'>
            <a href=''>Login</a>
            <button>Register</button>
        </div>
       
    </div>
  )
}

export default Navbar