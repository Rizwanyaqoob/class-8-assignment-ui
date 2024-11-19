import React from "react";
import Image from "next/image";
import logo from "../../../public/logo.png/desktop/Logo.png"



import {DM_Sans} from "next/font/google"
import {Inter} from "next/font/google"

const Dmsans = DM_Sans({
    weight:['400' , '700'],
    subsets:['latin'],
    style:['normal']
})
const inter= Inter({
    weight:['400' , '700'],
    subsets:['latin']
})
const Navbar = () => {
return(
    <div>
<div className="left-1 w-[1920px] h-[92px] py-[16px] px-[220px] bg-[#043873] flex justify-between items-center">
    <Image src={logo} alt="logo" className="w-[191px] h-[34px] flex justify-between items-center"/>
    <div className=" flex w-[737.5px] h-[60px] gap-[60px] justify-between items-center">
        <div className={`flex list-none ${Dmsans.className} flex items-center w-[549px] h-[23px] gap-[32px] font-medium text-[18px] leading-[23px] text-white text-left `}>
            <li className="hover:text-[#67E492] hover:underline">Products</li>
            <li className="hover:text-[#67E492] hover:underline">Solutions</li>
            <li className="hover:text-[#67E492] hover:underline">Resources</li>
            <li className="hover:text-[#67E492] hover:underline">Pricing</li>
        </div>
        <button className="w-[126px] h-[60px] rounded-lg py-4 px-10 gp-[10px] bg-[#FFE492] hover:bg-[#67E492]">
            <p className={`w-[46px] h-[23px] ${inter.className} font-medium text-[18px] leading-[23px] tracking-[-2%] text-[#043873] `}>Login</p>
            </button>
    </div>
</div>
    </div>
)
}

export default Navbar