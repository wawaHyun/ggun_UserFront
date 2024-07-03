'use client'

import TransJisu from "@/app/component/stock/transJisu";
import TransWon from "@/app/component/stock/transWon";
import BarChart from "@/app/component/chart/barChart";
import FirstMenu from "@/app/component/navigation/fristMenu";
import { Search } from "@/app/component/search/search";
import { useState } from "react";
import Image from "next/image";
import AdBox from "@/app/component/main/adBox";
import { WhiteBox } from "@/app/component/style/whiteBox";

export default function Home() {

  const [btn, setBtn] = useState(1)

  function handleCharts(btn: any) {
    console.log("handelCharts : ", btn)
    const enums: any = {
      1: <BarChart />,
      2: <TransWon />,
      3: <TransJisu />,
    };
    return <div>{enums[btn]}</div>;
  }


  return (
    <main className="w-[90%] h-full bg-white">
      <div className="flex h-[60%] py-3 gap-5">
        <div className="flex-col w-[40%]">
          <div className="w-full h-[90%] border"><AdBox /></div>
          <div className="w-full h-auto py-2">
          <Search text="Search" click=""/>
          </div>
        </div>

        <div className="flex-col w-[10%]">
          <button className="h-1/3 w-full" onClick={() => setBtn(1)}><WhiteBox children={<span>나스닥<br />주가지수</span>} style="text-center content-center bg-white" /></button>
          <button className="h-1/3 w-full py-2" onClick={() => setBtn(2)}><WhiteBox children={<span>오늘의<br />환율</span>} style="text-center content-center bg-white" /></button>
          <button className="h-1/3 w-full" onClick={() => setBtn(3)}><WhiteBox children="주요 지수" style="text-center content-center bg-white" /></button>
         </div>
        <div className="w-[50%]" ><WhiteBox children={handleCharts(btn)}/></div>
      </div>
      <div className="w-full h-[70px] my-3"><FirstMenu /></div>
    </main>
  );
}
