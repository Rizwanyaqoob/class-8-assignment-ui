import React from "react";
import { Inter } from "next/font/google";
import work from "../../../public/work.png/desktop/Work Together Image.png"
import Image from "next/image";
const inter = Inter({
    weight:['400',"700"],
    subsets:['latin']
})
const Project = ()=>{
    return(
    <>
    <div className="w-[1920px] h-[1588px] py-[140px] px-[220px] flex gap-[100px] flex-col "> 
<div className={`w-[1480px] h-[547px] gap-[60px] ${inter.className} flex items-center `}>
<div className="w-[672px] h-[411px] gap-[60px]">
<div className="w-[672px] h-[288px] gap-6">
    <h1 className="w-[672px] h-[174px] font-bold text-[72px] leading-[87.14px] tracking-[-2%] text-left text-[#212529]">Project Management</h1>
    <p className="w-[672px] h-[90px] font-normal text-[18px] leading-[30px] racking-[-2%] pt-7 text-left text-[#212529]">Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
</div>
<div>
    <button className="w-[201px] h-[63px] rounded-[6px] py-[20px] px-10 mt-[60px] flex gap-[10px] bg-[#4F9CF9] hover:bg-[#215493]">
        <p className="flex items-center text-white font-medium text-lg leading-[23px] tracking-[-2%] text-left">Get Started</p>
    </button>
</div>
</div>
<div className="w-[748px] h-[547px] bg-[#C4DEFD]"></div>
</div>


{/* work management section */}
<div className={`w-[1480px] h-[661px] flex items-center gap-[100px] ${inter.className} flex-row-reverse `}>

    <div className=" w-[670px] h-[294px] gap-[60px] flex flex-col ">
        <div className="w-[670px] h-[171px] gap-6 flex-col">
<h1 className="w-[670px] h-[87px] font-bold text-[72px] leading-[87.14px] tracking-[-2%] text-left text-[#212529] ">Work together</h1>
<p className="w-[670px] h-[60px] font-normal text-lg leading-[30px] tracking-[-2%] pt-[60px]">With whitepace, share your notes with your colleagues and collaborate on them.
You can also publish a note to the internet and share the URL with others.
</p>
        </div>
        <div className="mt-20">
       <button className='w-[196px] h-[63px] py-[20px] px-[40px] flex gap-[10px]  rounded-md bg-[#4F9CF9]  '>
          <p className='flex items-center gap-2 text-lg font-medium leading-[23px] tracking-[-2%] text-left text-white'>Try it now </p></button>
        </div>
    </div>
    <div className="w-[710px] h-[661px] gap-1 flex justify-start">
    <Image src={work} alt={"picture"}  />
    </div>
</div>
    </div>
    </>
    )
}

export default Project