import React from 'react'
import './Industries.css'
import chemical from './video/chemical.svg'
import paracetamol from './video/paracetamol.svg'
import electronics from './video/electronics.svg'
import whitegoods from './video/whitegoods.svg'
import textiles from './video/textiles.svg'
import manufactoring from './video/manufactoring.svg'
import agriculture from './video/agriculture.svg'

function Industries() {
  return (
    <div className='Industries_main'>
        <div className='Industries_sec'>
            <h3>Industries Served</h3>
            <div class="Industries_name">
                <div class="Indus">
                    <img src={chemical} alt="chemical"/>
                    <div class="Medicine_name">
                        Chemicals
                    </div>
                </div>
                <div class="Indus">
                    <img src={paracetamol}alt="paracetamol"/>
                    <div class="Medicine_name">
                        Pharmaceuticals
                    </div>
                </div>
                <div class="Indus">
                    <img src={electronics} alt="electronics"/>
                    <div class="Medicine_name">
                        Electronics
                    </div>
                </div>
                <div class="Indus">
                    <img src={whitegoods} alt="whitegoods" style={{"width": "84px", 'marginLeft': "8px"}}/>
                    <div class="Medicine_name">
                        White Goods
                    </div>
                </div>
                <div class="Indus">
                    <img src={textiles} alt="textiles" style={{"width": '88px', 'marginLeft': "6px"}}/>
                    <div class="Medicine_name">
                        Textiles
                    </div>
                </div>
                <div class="Indus">
                    <img src={manufactoring} alt="manufactoring"/>
                    <div class="Medicine_name">
                        Manufacturing
                    </div>
                </div>
                <div class="Indus">
                    <img src={agriculture} alt="agriculture"/>
                    <div class="Medicine_name">
                        Agriculture
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Industries