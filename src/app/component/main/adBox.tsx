'use client'
import { ArrowLeftIcon, ArrowRightIcon } from "@/app/common/icon/icon"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function ㅠAdBox() {

    const [current, setCurrent] = useState(0);
    const handleWidth = () => {
        current <= 1 ? setCurrent(current + 1) : setCurrent(current - 2);
        // console.log("width: ", current)
    }

    return (
        <div className="w-full h-full">
        <div className="relative top-0 h-full w-full rounded-lg overflow-hidden ">
            <div className="absolute z-10 bottom-0 left-1/2 -translate-x-1/2 flex w-auto h-auto">
               <button className="h-auto w-[40px]" onClick={() => handleWidth()}><ArrowLeftIcon color="#FFFFFF" /></button>
            <button className="h-auto w-[40px]" onClick={() => handleWidth()}><ArrowRightIcon color="#FFFFFF" /></button>
            </div>
            
            <div className={`w-[300%] h-full flex ${current != undefined ? `-translate-x-${current}/3` : '' } `}>
                <div className="w-1/3"><Image src='/ads/jusikAd2.jpg' alt='jusikAd2' width={700} height={300} style={{ width: 700, height: 300 }} priority/></div>
                <div className="w-1/3"><Image src='/ads/jusikAd1.jpg' alt='jusikAd1' width={700} height={300} style={{ width: 700, height: 300 }} priority/></div>
                <div className="w-1/3"><Image src='/ads/jusikAd3.jpg' alt='jusikAd3' width={700} height={300} style={{ width: 700, height: 300 }} priority/></div>
            </div>
        </div>
        </div>

    )
}