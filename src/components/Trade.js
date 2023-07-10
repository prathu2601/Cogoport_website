import React from 'react'
import './Trade.css'
import trade_img from './video/trade-tech-home-1.webp'

function Trade() {
  return (
    <div className='Trade_main'>
        <div className='Trade_sec'>
            <div className='Trade_content'>
                <h2>Get Started Today</h2>
                <p>Plan, Book and Finance your shipment in one place.</p>
                "Experience how Cogoport’s Global Trade Platform can Turbocharge your Business."<br></br>
                <a href="" target="_blank" className="Trade_button" rel="noreferrer">Get Started</a>
                {/* <button>Get Started</button> */}
            </div>
            <div className='Image_move_card'>
              <img className='Image_move' src={trade_img}/>
            </div>
        </div>
    </div>
  )
}

export default Trade