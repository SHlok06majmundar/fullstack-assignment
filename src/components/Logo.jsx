import React from 'react'
import LogoImage from "../assets/Logo.jpg"
const Logo = () => {
    return (
        <>
            <div className="container flex flex-col">

                <div className="flex justify-start pl-2 pt-2 w-full">
                    <img src={LogoImage} alt="" width="150px" />
                </div>
                
            </div>
        </>
    )
}

export default Logo
