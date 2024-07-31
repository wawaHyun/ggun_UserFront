'use client'

import { mainExchangeDummy } from "@/app/common/dummy/exchange.dummy";
import { WhiteBox } from "../style/whiteBox";
import { useEffect, useState } from "react";
import { cookies } from "next/headers";

export default function TransWon() {

    const [nowWon, setNowWon] = useState<IKisSection[]>([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const res = await fetch(`/api/exchange`);
    //             const data: [] = await res.json();
    //             setNowWon(data);
    //             // console.log("exchange : ", data);
    //         } catch (error) {
    //             console.error("Failed to fetch exchange rates:", error);
    //         }
    //     };
    //     fetchData();
    // }, []);


    const kisSection = async () => {
        try {
            // console.log("KIS section page in!", parseCookies().kisAccessToken);
            const response = await fetch(`/api/kis/kisSection`);
            // const response = await fetch(`/api/kis/kisSection`, {
            //     method: 'GET',
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'Authorization': `Bearer ${parseCookies().kisAccessToken}`
            //     },
            // })
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }

            const data: IKisAuth = await response.json();
            console.log("KIS section : ", data);
            return data.access_token;
        } catch (error) {
            console.log("KIS section err : " + error);
            return null;
        }
    }

    const accessToken = cookies().get('kisAccessToken');

    useEffect(() => {
        if (accessToken) {
            kisSection()
                .then((res) => console.log("kisSection : ", res))
        } else {
            alert("token 발급실패! 다시 로그인 해주세요.")
        }
    }, []);


    return (
        <div className="w-full h-full flex justify-center content-center">
            <div className="w-full h-[70%] text-center grid grid-cols-2 gap-5">
                {nowWon.map((v: IKisSection, i: number) =>
                    <WhiteBox key={i}>
                        <div>
                            {v.ACML_TR_PBMN}ddd
                        </div>
                        {/* <div className="py-3 space-y-2">
                            <div className="">{v.cur_nm} {v.cur_unit}<hr /></div>
                            <div className="text-blue-500 text-lg">살때 {v.ttb}</div>
                            <div className="text-blue-500 text-lg">팔때 {v.tts}</div>
                        </div> */}
                    </WhiteBox>
                )}
            </div>
        </div>
    )

}