import React from 'react'
import './Products.css'
import Product_box from './Product_box'

function Products() {
  return (
    <div className='Products_main'>
        <h3 className='Title_main'> Our Products</h3>
        <div className='Product_description'>
            <div className='Products_sec'>
                <div className='Products_content'>
                    <h4 className='Product_title'>
                        End to End Cross Border Logistics
                    </h4>
                    <div className='Product_boxes'>
                        <Product_box name={'Ocean:FCL'} />
                        <Product_box name={'Ocean:LCL'}/>
                        <Product_box name={'International Air'}/>
                        <Product_box name={'Customs, CFS, & Handlings'}/>
                    </div>
                    
                </div>
                <div className='Products_content'>
                    <h4 className='Product_title'>
                        Domestic Logistics
                    </h4>
                    <div className='Product_boxes'>
                        <Product_box name={'FTL:PTL'}/>
                        <Product_box name={'Trailer & Rail Container Haulauge'}/>
                    </div>
                    
                </div>
                <div className='Products_content'>
                    <h4 className='Product_title'>
                        Supply Chain Solutions
                    </h4>
                    <div className='Product_boxes'>
                        <Product_box name={'CogoAssured'}/>
                        <Product_box name={'Domestic Fulfilment'}/>
                        <Product_box name={'Door to Door Shipments'}/>
                        <Product_box name={'Cargo Insurance'}/>
                    </div>
                    
                </div>
                <div className='Products_content'>
                    <h4 className='Product_title'>
                        Financial Services
                    </h4>
                    <div className='Product_boxes'>
                        <Product_box name={'Pay Later'}/>
                        <Product_box name={'Export Factoring'}/>
                    </div>
                    
                </div>
                <div className='Products_content'>
                    <h4 className='Product_title'>
                        Trade Management Solutions
                    </h4>
                    <div className='Product_boxes'>
                        <Product_box name={'Fright Rates & Schedules'}/>
                        <Product_box name={'Quick Premium Quotations'}/>
                        <Product_box name={'Duties and Taxes Calculator'}/>
                        <Product_box name={'Tracking & Visibility'}/>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Products