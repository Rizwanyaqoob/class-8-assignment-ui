import React from "react";
import {Inter} from "next/font/google"



const inter = Inter ({
    weight:['700' , '500','400'],
    subsets:['latin'],
    style:['normal']
})
const Extension = ()=>{
    return(
        <>
        <div className="w-[1921px] h-[759px] py-[140px] px-[220px] flex items-center gap-[98px] bg-[#043873]">
<div className={`w-[697px] h-[294px] gap-[60px] ${inter.className}`}>
    <div className="w-[697px] h-[171px] gap-6">
    <h1 className="w-[697px] h-[87px] font-bold text-[72px] tracking-[-2%] leading-[87.14px] text-white text-left">Use as Extension</h1>
    <p className="w-[697px] h-[60px] font-normal mt-10 text-lg leading-[30px] tracking-[-2%] text-white text-left" >Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.    </p>    
    </div>
<div>
    <button className="mt-20 w-[171px] h-[63px] rounded-[6px] bg-[#4F9CF9] py-[20px] px-[40px] flex gap-[10px] ">
        <p className=" font-medium text-lg leading-[23px]  text-white">Let’s Go -</p>
    </button>
</div>
</div>
<div className="w-[686px] h-[479px] bg-[#C4DEFD]"></div>
        </div>
        </>
    )
}

export default Extension