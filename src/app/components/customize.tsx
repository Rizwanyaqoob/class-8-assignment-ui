import React from "react";
import { Inter } from "next/font/google";

const inter=Inter ({
    weight:['700','400','500'],
    subsets:['latin']
})

const Customize =()=>{
    return(
<>
<div className="w-[1921px] h-[812.09px] py-[140px] px-[220px]  flex flex-row-reverse gap-[98px] items-center bg-white">
<div className={`w-[669px] h-[411px] flex flex-col gap-[60px] ${inter.className}`}>
<div className="w-[669px] h-[288px] flex-col gap-[24px]">
    <h1 className="w-[669px] h-[174px] font-bold text-[72px] leading-[87.14px] tracking-[-2%] text-left text-[#212529]">Customise it
    to your needs</h1>
    <p className="w-[669px] h-[90px] pt-12 font-normal text-lg leading-[30px] text-left text-[#212529]">Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.</p>
</div>
<div >
<button className="w-[171px] h-[63px] rounded-[8px] py-5 px-10 flex gap-[10px] bg-[#4F9CF9]">
    <p className="w-[67px] h-[23px] font-medium  leading-[23px] text-white">Let’s Go</p>
</button>
</div>
</div>
<div className="w-[714px] h-[532.09px] flex gap-1 bg-[#C4DEFD]"></div>
</div>
</>
    )}

export default Customize