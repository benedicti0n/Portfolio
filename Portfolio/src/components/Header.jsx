import React from "react";
import Image from '../assets/logo.svg';

function Header() {
    return (
        <div className="w-[80%] h-[10%] flex justify-center items-center absolute top-0">
            <img src={Image} alt="" className="w-[150px]" />
        </div>
    );
}

export default Header;
