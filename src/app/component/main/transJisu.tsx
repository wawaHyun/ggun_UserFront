'use client'

import BarChart from "../chart/barChart";
import { WhiteBox } from "../style/whiteBox";
import { useKisSectionFetch, useKisSectionStack } from "@/app/store/kisApi.store";
import { kisAuthkey } from "../login/kisAuth";

export default function TransJisu() {

    const fecthAccesstoken = useKisSetAuth();
    const kisAccesstoken = useKisAuthStack();
    const fecthKisSection = useKisSectionFetch();
    const kisSection = useKisSectionStack();

    const accessToken = kisAuthkey();

    try {
        // if(kisAccesstoken == null){
        //     fecthAccesstoken(accessToken);
        // }

        // console.log("KIS authkey : ", cookies().get('kisAccessToken')); 

        if(kisSection.length == 0){
            console.log("kisAccesstoken1 : ", accessToken);
            fecthKisSection();
        }
        console.log("kisAccesstoken2 : ", accessToken);
        // console.log("kisSection : ", kisSection);
    } catch (error) {
        console.error("Failed to fetch exchange rates:", error);
    }



    return (
        <div className="w-full h-full flex justify-center content-center">
            <div className="w-[80%] h-[60%] grid grid-cols-2  text-center gap-2">
               <WhiteBox>
                    <div className="">
                        <div className="text-amber-500">구리<hr /></div>
                        <div className=""><BarChart /></div>
                    </div>
                </WhiteBox>
                <WhiteBox>
                    <div className="">
                        <div className="text-amber-500">금<hr /></div>
                        <div className=""><BarChart /></div>
                    </div>
                </WhiteBox>
                <WhiteBox>
                    <div className="">
                        <div className="text-amber-500">희토류<hr /></div>
                        <div className=""><BarChart /></div>
                    </div>
                </WhiteBox>
                <WhiteBox>
                    <div className="">
                        <div className="text-amber-500">반도체<hr /></div>
                        <div className=""><BarChart /></div>
                    </div>
                </WhiteBox>
            </div>
        </div >
    )

}