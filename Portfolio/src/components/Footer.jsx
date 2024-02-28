import React from 'react'
import Clock from './Clock'
import Date from './DateComp'
import DateComp from './DateComp'

function Footer(){
    return(
        <div className="w-[80%] h-[10%] flex justify-center items-center absolute bottom-0">
            <div className="w-[80%] flex justify-center">
                <div>Kolkata</div>
                <p className='mx-2'>•</p>
                <div>
                    <Clock/>
                </div>
                <p className='mx-2'>•</p>
                <div>
                    <DateComp/>
                </div>
            </div>
        </div>
    )
}

export default Footer