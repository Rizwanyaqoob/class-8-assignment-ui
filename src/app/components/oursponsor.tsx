import React from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import apple from "../../../public/Landing page V1/desktop/Apple.png"

import microsoft from "../../../public/Whitepace - SaaS Landing Page (3)/Landing page V1/desktop/microsoft 1.png"
import slck from "../../../public/Whitepace - SaaS Landing Page (2)/Landing page V1/desktop/Slack.png"
import google from "../../../public/Whitepace - SaaS Landing Page (15)/Landing page V1//desktop/Google.png"

const inter = Inter({
    weight :['700'],
    subsets:['latin']
})
const Sponsor =()=>{
    return(
        <>
<div className="w-[1922px] h-[538px] py-[140px] px-[220px] flex flex-col gap-[100px]">
<div className='w-[1482px] h-[87px] '>
        <h1 className={`${inter} font-bold text-[72px] leading-[87.14px] tracking-[-2%] text-center text-[#212529]`}>Our sponsors</h1></div>
        <div className="w-[1482px] h-[71px] flex list-none justify-between items-center">
<li className="w-[55.47px] h-[68px] gap-1 "><Image src={apple} alt="Apple-logo"/></li>
<li className=" w-[287px] h-[62px] gap-1 "><Image src={microsoft} alt="microsoft-logo"/></li>
<li className="w-[280px] h-[71px] gap-1 "><Image src={slck} alt="slack-logo"/></li>
<li className="w-[211px] h-[69.81px] gap-1 "><Image src={google} alt="google-logo"/></li>
</div>    

</div>
        </>
    )
}
export default Sponsor