import React from "react"
import Image from '../assets/logo.svg'

function Header(){
    return(
        <div className="flex justify-center items-center w-[80%] h-[10%]">
            <img src={Image} alt="" className=" w-[150px]" />
        </div>
    )
}

export default Header