'use client'

import { useState } from "react";
import StockInfo from "./stockInfo/page";
import { TabButton } from "@/app/component/button/tabButton";
import NewsToday from "../../component/news/newsToday";
import StockLog from "./stockLog/page";
import ChatRoom from "./chatting/pate";
import { allNews } from "@/app/api/news/route";

function Stock() {
    const [btn, setBtn] = useState(1);
    const [active, setActive] = useState(1);

    function handleInfo(btn: any) {
        console.log("handelCharts : ", btn)
        const enums: any = {
            1: <StockInfo />,
            2: <StockLog />,
            3: "재무정보는 머냐 ㅋ",
            4: <NewsToday title="최신뉴스" />,
            5: <ChatRoom />,
            6: <div ><a href="/stock/stockchat/1">종목 토론방을 만들긴 함</a></div>,
        };
        return <div>{enums[btn]}</div>;
    };

    return (
        <div className="w-full h-full">
            <div className="w-full flex justify-center">
                <div className="flex-col w-[85%] items-center flex mb-3">
                    <div className="w-full h-[300px] bg-cover bg-benner_img bg-center bg-fixed"></div>
                    <div className="w-[85%] border shadow-lg rounded-lg ">
                        <div className="h-[50px] grid grid-cols-5">
                            <TabButton text="종합" click={() => setBtn(1)} select={btn == 1} />
                            <TabButton text="시세" click={() => setBtn(2)} select={btn == 2} />
                            <TabButton text="재무정보" click={() => setBtn(3)} select={btn == 3} />
                            <TabButton text="관련뉴스" click={() => setBtn(4)} select={btn == 4} />
                            <TabButton text="종목토론" click={() => setBtn(5)} select={btn == 5} />
                        </div>
                        <div className="p-5" >{handleInfo(btn)}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Stock;