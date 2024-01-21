import React from 'react'
import './userProfileCard.css'
import profile_icon from '../Asset/download.jpeg'

const USERPROFILECARD = () => {
  return (
    <div> 
           <div className='ups'>
                <div className='image'>
                    <img src={profile_icon} alt=''/>
                  </div>
                  <div className='name'>
                    <h1>Chukwudi Patrick</h1>
                  </div>

                  <div className='description'>
                    <p>I am a front end developer good in both html, css, javascript and reaact</p>

                    <a href="mailto:patchamp92@gmail.com">Contact me</a>

                </div>
           </div>

            
    </div>
   
        

    
  )
}

export default USERPROFILECARD