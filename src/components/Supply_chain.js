import React from 'react'
import './Supply_chain.css'
import Supply_chain_image from './video/map-supply-chain.webp'

function Supply_chain() {
  return (
    <div style={{"margin-top":"40px"}}>
        <div className='Supply_sec'>
            <div className='Supply_left'>
                <h2>One Stop Solution for Your Supply Chain</h2>
                <span>Connected Shipping, Finance, and Trade-tech, to Power Global Trade and Supply Chains.</span>
            </div>
            <div className='Supply_right'>
                <img src={Supply_chain_image} className='Supply_img'></img>
            </div>
        </div>
    </div>
  )
}

export default Supply_chain