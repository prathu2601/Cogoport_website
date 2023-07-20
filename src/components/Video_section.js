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
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" width="1em" height="1em" role="img" className="whats_app"><g fill="#73D081"><path className="ic-c-send_whatsapp_svg__ic_c_send_whatsapp" d="M1.05 6.946c0 1.048.275 2.071.798 2.973L1 13l3.167-.827a5.994 5.994 0 0 0 2.856.724h.002c3.293 0 5.974-2.668 5.975-5.946 0-1.59-.62-3.083-1.748-4.207A5.951 5.951 0 0 0 7.025 1C3.732 1 1.052 3.667 1.05 6.946Zm1.886 2.817-.118-.186a4.913 4.913 0 0 1-.76-2.63c.002-2.726 2.23-4.943 4.969-4.943a4.94 4.94 0 0 1 3.51 1.45 4.901 4.901 0 0 1 1.454 3.496c-.001 2.725-2.229 4.943-4.966 4.943h-.002a4.978 4.978 0 0 1-2.527-.69l-.182-.106-1.88.49.502-1.824Z"></path><path class="ic-c-send_whatsapp_svg__ic_c_send_whatsapp" d="M5.532 4.46c-.112-.248-.23-.253-.336-.257C5.11 4.199 5.01 4.2 4.91 4.2a.55.55 0 0 0-.398.185c-.137.15-.523.509-.523 1.24s.535 1.438.61 1.537c.075.1 1.033 1.648 2.55 2.243 1.261.496 1.518.397 1.792.372.273-.024.883-.36 1.007-.706.125-.347.125-.645.088-.707-.038-.062-.137-.099-.287-.173-.15-.075-.883-.434-1.02-.484-.137-.05-.236-.074-.336.075-.1.148-.385.483-.472.582-.087.1-.175.112-.324.038-.15-.075-.63-.232-1.2-.738a4.48 4.48 0 0 1-.831-1.03c-.087-.148-.01-.228.066-.302.067-.067.149-.174.224-.26.074-.088.099-.15.149-.249.05-.099.025-.186-.013-.26-.037-.074-.327-.81-.46-1.103"></path></g></svg>
                            <select className='whats_sel'>
                                <option>+91</option>
                                <option>+92</option>
                                <option>+93</option>
                                <option>+94</option>
                                <option>+95</option>
                            </select>
                            <input type='text' placeholder='WhatsApp number'>
                                
                            </input>
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