import React from 'react'
import './userProfileCard.css'
import profile_icon from '../Asset/download.jpeg'

const USERPROFILECARD = () => {
  return (
    <div className='ups'>

        <div className='gradient'> </div>
        <div className='profile-down'>
            <img src={profile_icon} alt=''/>
            <div className='profile-title'>Chukwudi Patrick</div> 
            <div className='profile-description'>
                I am a front end developer good in both html, css, javascript and reaact
            </div>
            <div className='profile-button'><a href="mailto:patchamp92@gmail.com">Contact me</a></div> 
            
        
        </div>

    </div>
  )
}

export default USERPROFILECARD