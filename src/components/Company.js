import React from 'react'
import './Company.css'
import aisi from './video/ais-logo-1.webp'
import jsw from './video/jsw-logo-new.webp'
import bombay from './video/bombay-dyeing-logo-1.webp'

function Company() {
  return (
    <div className='Trusted_part'>
        <h3 className='Trust'>Trusted by</h3>
        <div className='Company_nm'>
            <div className='Anima'>
                <div className='Company_name'>
                  <img src= {aisi} className='styles_img'/>
                  <img src= {jsw} className='styles_img'/>
                  <img src= {bombay} className='styles_img'/>
                  <img src= {aisi} className='styles_img'/>
                  <img src= {jsw} className='styles_img'/>
                  <img src= {bombay} className='styles_img'/>
                  <img src= {aisi} className='styles_img'/>
                  <img src= {jsw} className='styles_img'/>
                  <img src= {bombay} className='styles_img'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Company