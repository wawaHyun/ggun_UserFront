'use client'

import FirstMenu from "@/app/component/navigation/fristMenu";
import { Search } from "@/app/component/search/search";
import { useState } from "react";
import AdBox from "@/app/component/main/adBox";
import { WhiteBox } from "@/app/component/style/whiteBox";
import TransJisu from "@/app/component/main/transJisu";
import TransWon from "@/app/component/main/transWon";
import NasdaqBarChart from "@/app/component/chart/nasdaqBarChart";
import Introduce from "@/app/component/main/Introduce";

export default function BeforeHome() {

  const [btn, setBtn] = useState(1)

  function handleCharts(btn: any) {
    console.log("handelCharts : ", btn)
    const enums: any = {
      1: <NasdaqBarChart />,
      2: <TransWon />,
      3: <TransJisu />,
    };
    return <div>{enums[btn]}</div>;
  }


  return (
    <main className="w-full h-full flex justify-center">
      <div className="w-[90%] mt-2">


        <div className="grid grid-cols-7 h-[300px] gap-3">
          <div className="col-span-3 w-full h-full space-y-1">
            <div className="w-full h-[90%]"><AdBox /></div>
            <div className="w-full h-[10%] ">
              <Search click="" >Search</Search>
            </div>
          </div>

          <div className="flex-col space-y-2 h-full w-full">
            <button className="h-1/3 w-full truncate" onClick={() => setBtn(1)}><WhiteBox style="h-full text-center content-center bg-white" ><span>나스닥<br />주가지수</span></WhiteBox></button>
            <button className="h-1/3 w-full truncate" onClick={() => setBtn(2)}><WhiteBox style="h-full text-center content-center bg-white" ><span>오늘의<br />환율</span></WhiteBox></button>
            <button className="h-1/3 w-full truncate" onClick={() => setBtn(3)}><WhiteBox style="h-full text-center content-center bg-white" >주요 <br />지수</WhiteBox></button>
          </div>

          <div className="col-span-3 h-full w-full my-2" ><WhiteBox children={handleCharts(btn)} style="w-full h-full" /> </div>
        </div>

        <div className="w-full h-[70px] my-[30px]"><FirstMenu /></div>
        <div className="w-full">
          <Introduce />
        </div>
      </div>
    </main>
  );
}
