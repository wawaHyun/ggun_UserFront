
import Introduce from "@/app/component/main/Introduce";
import AdBox from "@/app/component/main/adBox";
import MiniNotice from "@/app/component/main/miniNotice";
import { Search } from "@/app/component/search/search";
import Image from "next/image";
import Link from "next/link";

export default function AfterHome() {
    return (
        <main className="w-full h-full flex justify-center ">
            <div className="w-[90%] mt-2">
                <div className="space-y-3">
                    <div className="w-full h-full "><Search click="" >Search</Search></div>
                    <div className="w-full h-[500px]"><AdBox /></div>
                </div>

                <div className="grid grid-cols-5 p-5">
                    <div className="col-span-2"><MiniNotice /></div>
                    <div className=""></div>
                    <div className="col-span-2 border relative top-0">
                        <div className=""> <Image src={"/imgs/character1.jpg"} fill alt={"character1"}></Image></div>
                        <div className="sticky top-0 z-5 w-full h-full text-center content-center text-[50px] "><Link href={"/articles/character"} className="">나의 투자 성향은?</Link></div>
                    </div>
                </div>
                <div className="w-full">
                    <Introduce />
                </div>
            </div>
        </main>
    )
}
