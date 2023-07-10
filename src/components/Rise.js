import React,{useState,useEffect} from 'react'
import './Rise.css'

function Rise() {
    const [countries, setCountries] = useState(0)
    const [ports, setPorts] = useState(0)
    const [aircargo, setAircargo] = useState(0)
    const [containers, setContainers] = useState(0)
    useEffect(()=>{
        setTimeout(() => {
            setCountries((pre)=>{
                // console.log(pre);
                if(pre < 180)
                    return pre+1;
                return pre;
            })
            setPorts((prep)=>{
                if(prep<10000)
                    return prep+51;
                return 10000;
            })
            setAircargo((prea)=>{
                if(prea<30000)
                    return prea+101;
                return 30000;
            })
            setContainers((prec)=>{
                if(prec<700000)
                    return prec+1501;
                return 700000;
            })
        }, 1);
    })
  return (
    <div className='main_numbers'>
        <div className='main_num'>
            <div className='Numbers_sec'>
                <h2>{countries}+</h2>
                <h4>Countries Served</h4>
            </div>
            <div className='Numbers_sec'>
                <h2>{ports}</h2>
                <h4>Ports Pairs Served</h4>
            </div>
            <div className='Numbers_sec'>
                <h2>{aircargo}+</h2>
                <h4>Tons of Air Cargo Moved</h4>
            </div>
            <div className='Numbers_sec'>
                <h2>{containers}</h2>
                <h4>Containers Moved</h4>
            </div>
        </div>
    </div>
  )
}

export default Rise