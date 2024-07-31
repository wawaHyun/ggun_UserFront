'use client'

import Image from "next/image";
import Link from "next/link";
import { WhiteBox } from "@/app/component/style/whiteBox";
import { tradeDummy } from "@/app/common/dummy/account.dummy";
import { IAccount } from "@/app/api/model/account.model";
import { StockRankingDummy } from "@/app/common/dummy/stock.dummy";
import MiniChart from "@/app/component/chart/miniChart";
import { StockJisu } from "@/app/component/stock/stockJisu";
import StockLank from "@/app/component/stock/stockLank";
import MyAccInfo from "@/app/component/main/myAccInfo";

export default function AfterHome() {

    const accList = tradeDummy;

    const highestIdPerAcno = Object.values(accList.reduce((acc: Record<string, IAccount>, account: IAccount) => {
        if (!acc[account.acno] || acc[account.acno].id < account.id) {
            acc[account.acno] = account;
        }
        return acc;
    }, {}));

    return (
        <main className="w-full h-full">
            <div className="w-full h-[300px] border"><MyAccInfo/></div>
            <div className=""></div>
            <div className="px-8"><StockJisu /></div>
                    

            <div className="w-full flex justify-center">
                <div className="w-[50%] border ">
                    <StockLank />
                </div>
            </div>
            <div className="bg-amber-300 w-full h-[300px]"></div>
        </main>
    )
}
