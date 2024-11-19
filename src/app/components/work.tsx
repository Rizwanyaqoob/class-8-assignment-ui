import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({
    weight:['400',"700"],
    subsets:['latin']
})
const Work =()=>{
    return(
        <>
        <div className="w-[1921px] h-[574px] py-[140px] px-[220px] bg-[#043873]">
<div className="w-[1481px] h-[291px] flex flex-col gap-[60px] items-center">
    <div className="w-[1064px] h-[171px] flex-col gap-6 ">
        <h1 className="w-[1064px] h-[87px] font-bold text-[72px] leading-[87.14px] text-white "> Your work, everywhere you are</h1>
<p className="w-[1064px] h-[60px] font-normal text-lg leading-[30px] text-center text-white mt-10">Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
    </div>
<button className="w-[195px] h-[63px] rounded-lg py-5 px-10 bg-[#4F9CF9] flex gap-[10px] ">
    <p className="flex items-center w-[91px] h-[23px] font-medium  leading-[23px] tracking-[-2%] text-white">Try Taskey -</p>
</button>
</div>
        </div>
        </>
    )
}
export default Work