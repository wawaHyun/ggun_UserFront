
import { mainExchangeDummy } from "@/app/common/dummy/exchange.dummy";
import { WhiteBox } from "../style/whiteBox";
import { useEffect, useState } from "react";
import { useExchangeFetch, useExchangeStack } from "@/app/store/exchange.store";
// import { cookies } from "next/headers";

export default function TransWon() {

    const fecthExchange = useExchangeFetch();
    const currentExchange = useExchangeStack();

    try {
        if(currentExchange.length == 0){
            fecthExchange();
        }
        console.log("exchange : ", currentExchange);
    } catch (error) {
        console.error("Failed to fetch exchange rates:", error);
    }

    return (
        <div className="w-full h-full flex justify-center content-center">
            <div className="w-full h-[70%] text-center grid grid-cols-2 gap-5">
                {currentExchange.map((v: IExchange, i: number) =>
                    <WhiteBox key={i}>
                        <div className="py-3 space-y-2">
                            <div className="">{v.cur_nm} {v.cur_unit}<hr /></div>
                            <div className="text-blue-500 ">살때 {v.ttb}</div>
                            <div className="text-blue-500 ">팔때 {v.tts}</div>
                        </div>
                    </WhiteBox>
                )}
            </div>
        </div>
    )

}