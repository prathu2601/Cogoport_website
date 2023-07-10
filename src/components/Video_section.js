import React from 'react'
import './Video_section.css'
import video1 from './video/cogoverse_desktop_2_webm.webm'

function Video_section() {
  return (
    <div className='main'>
        <div className='main_2'>
            <div className='left_part'>
                <h1>Grow Faster, Go Global</h1>
                <p>
                Strengthen your Supply Chain, and Scale your Business with Reliable Shipping and Cashflows.
                </p>
                <form>
                    <div className='text_top'>
                        Talk to us now!
                    </div>
                    <div className='Video_1'>
                        <div className='Video_input'>
                            <input type='text' placeholder='WhatsApp number'></input>
                            <button className='Video_button'>Get Started</button>
                        </div>
                    </div>
                </form>
            </div>
            <video autoPlay loop className='video_class'>
                <source src={video1}></source>
            </video>
            <video autoPlay loop className='video_class_1'>
                <source src={video1}></source>
            </video>
        </div>
    </div>
  )
}

export default Video_section