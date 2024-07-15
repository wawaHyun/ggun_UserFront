import { ArrowLeftIcon, ArrowRightIcon } from "@/app/common/icon/icon"
import Image from "next/image"
import { useState } from "react"

export default function AdBox() {

    const [current, setCurrent] = useState(0);

    const handleWidth = () => {
        current <= 480 ? setCurrent(current + 440) : setCurrent(current - 880);
        console.log("width: ", current)
    }

    return (
        <div className="relative top-[0px] h-[300px] w-[480px] rounded-lg overflow-hidden flex">
            <button className="z-10 absolute top-0 h-[300px] w-[40px] content-center" onClick={() => handleWidth()}><ArrowLeftIcon color="#F3E8EB" /></button>
            <div className={`absolrute w-[14400px] h-[300px] z-5 flex -translate-x-[${current}px] bg-pink-200`}>
                <Image src='/imgs/jusikAd1.jpg' alt='jusikAd1' width={500} height={500} className="w-[600px] h-[300px]" />
                <Image src='/imgs/jusikAd2.jpg' alt='jusikAd2' width={480} height={300} layout="responsive"/>
                <Image src='/imgs/jusikAd3.jpg' alt='jusikAd3' width={480} height={300} className="w-[480px] h-[300px]"/>
            </div>
            <button className="z-10 absolute top-0 left-[440px] h-[300px] w-[40px] content-center" onClick={() => handleWidth()}><ArrowRightIcon color="#F3E8EB" /></button>
        </div>

    )
}