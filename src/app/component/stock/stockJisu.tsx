import { StockRankingDummy } from "@/app/common/dummy/stock.dummy";
import { WhiteBox } from "../style/whiteBox";
import Link from "next/link";
import MiniChart from "../chart/miniChart";

export const MyStockList = () => {

    let current = 150;
    // -translate-x-${current}/3


    return (
        <div className="h-full w-full rounded-lg overflow-hidden overflow-x-scroll overscroll-contain scroll-smooth will-change-auto hover:will-change-scroll">
            <div className={`flex space-x-5 hover:translate-x-3/6`}>
                {StockRankingDummy.map((v: any, i: number) =>
                    <WhiteBox key={v.id} style=" min-w-[200px] min-h-[100px] content-center bg-slate-100">
                        <Link href={`/stock/stockDetail/${v.id}`}
                            className="grid grid-cols-2 text-center items-center w-full h-full" >
                            <div className="tuncate text-m">{v.stock}</div>
                            <div className="row-span-2 w-full h-full content-center"><MiniChart /></div>
                            <span className="">{v.now}</span>
                        </Link>
                    </WhiteBox>
                )}
            </div>
        </div>

    )
}