import React from 'react'
import img1 from '../images/image-hero-desktop.png'
import img2 from '../images/client-databiz.svg'
import img3 from '../images/client-audiophile.svg'
import img4 from '../images/client-meet.svg'
import img5 from '../images/client-maker.svg'
import '../Section/Section.css'


const Section = () => {
  return (
    <div className='mainAndImage'>
        <div className='main-section'>
                <h1>Make remote work</h1>
                <p>Get your team in sync, no matter your location
                  Steamline processes, create tam rituals, and watch 
                  procutivity soar.
                </p>

                <button>Learn more</button>

                <div className='Four-images'>
                    <div>
                          <img src={img2} />
                    </div>
                    <div>
                          <img src={img3} />
                    </div>
                    <div>
                          <img src={img4} />
                    </div>
                    <div>
                          <img src={img5} />
                    </div>
                </div>
        </div>
        
        <div className='image-section'>
        <img src={img1} />
        </div>

    </div>
  )
}

export default Section