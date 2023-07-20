import React from 'react'
import './Top.css'
import cogo_icon from './video/cogoport_icon.webp'

function Top() {
  return (
    <div>
        <div className='Top_main'>
            <div className='Top_content'>
                <img className='cogo_icon' src={cogo_icon}/>
                <strong className='White_col'>
                    Limited Time Offer: Get 15% off on all Cogo Assured Rates.
                    <strong className='Yellow_col'>
                        Book Today!
                    </strong>
                </strong>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#FBDC22" viewBox="0 0 14 14" width="1em" height="1em" role="img" className="cross_style"><path class="ic-m-cross_svg__ic_m_cross" d="M2.828 2.516a.922.922 0 0 0-.31.311.372.372 0 0 0 .004.353c.033.066.654.704 1.908 1.959L6.288 7 4.43 8.861c-1.254 1.255-1.875 1.893-1.908 1.959-.09.181-.049.348.13.529.172.173.351.217.528.129.066-.033.704-.654 1.959-1.908L7 7.712 8.861 9.57c1.255 1.254 1.893 1.875 1.959 1.908.177.088.355.044.529-.129.173-.174.217-.352.129-.529-.033-.066-.654-.704-1.908-1.959L7.712 7 9.57 5.139c1.254-1.255 1.875-1.893 1.908-1.959.088-.177.044-.356-.129-.528-.181-.179-.348-.22-.529-.13-.066.033-.704.654-1.959 1.908L7 6.288 5.139 4.43C3.884 3.176 3.246 2.555 3.18 2.522a.384.384 0 0 0-.352-.006" fill-rule="evenodd"></path></svg>
        </div>
    </div>
  )
}

export default Top