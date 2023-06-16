import React from 'react'
import InputE from "./InputE"
import Temp from './Temp';

function Weather(){
    return(
        <div className='container'>
            <InputE />
            <div className='city-name'>
                <h1>Pune</h1>
            </div>
            <div className='Temp'>
            <Temp />
            </div>
        </div>
    )
}
export default Weather;