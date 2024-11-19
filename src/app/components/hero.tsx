import React from "react";
import {Inter} from "next/font/google"

const inter = Inter ({
    weight:['700' , '400'],
    subsets:['latin'],
    style:['normal']
})
const Hero = () => {
    return(

        <>
        <div className="w-[1920px] h-[829px] py-[140px] px-[220px] flex items-center bg-[#043873]">
        <div className={`w-[656px] flex-1 h-[361px] flex gap-[60px] ${inter.className} flex-col` }> 
    <div className="w-[656px] h-[238px]  gap-[24px] ">
        <h2 className="w-[656px] h-[154px]  font-bold text-[64px] leading-[77.45px] text-white [tracking-[-2%] text-left">Get More Done with whitepace</h2>
    <p className="w-[656px] h-[60px] pt-6 font-medium text-[18px] leading-[30px] trackig-[-2%] text-white text-left">Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
    </div>
    <div>
        <button className="w-[219px] h-[63px] rounded-lg p-5 gap-[10px] bg-[#4F9CF9] hover:bg-[#3c8bf3]">
            <p className="text-white font-medium text-[18px] leading-[23px] tracking-[-2%]">Try Whitepace free </p>
        </button> 
    </div>
    
</div>
<div className="w-[824px] h-[549px] gap-1 bg-[#C4DEFD]"></div>
        </div>
        </>
    )
}

export default Hero