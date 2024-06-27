'use client'

import { useState } from "react";
import StockInfo from "./stockInfo/page";
import { TabButton } from "@/app/component/button/tabButton";
import NewsToday from "../../news/module/newsToday";
import StockLog from "./stockLog/page";
import StockChat from "./stockchat/[id]/page";

function Stock() {
    const [btn, setBtn] = useState(5);
    const [active, setActive] = useState(1);

    const news = [
        { id: 1, main: true, img: 'https://wimg.mk.co.kr/svc/desking/1000/index/202406/A11032148_29_20240603162432.png', title: '주주가치 끌어올리는 DGB금융그룹... 황병우 회장 자사주 매입하고 미국서 IR', paper: '황병우 DGB금융그룹 회장이 책임경영 강화와 주주가치 제고를 위해 자사주를 매입하고 해외 기업설명회(IR)를 실시한다고 3일 밝혔다.    황 회장은 오는 10일부터 14일까지 5일간 미국 주요 도시에서 주요 주주와 잠재투자자를 대상으로 기업설명회(IR)를 개최한다. 이번 IR은 지난 3월 황 회장의 공식 취임 이후 약 3개월만으로 그룹의 중기 전략 추진과제 중 하나인 ‘주주가치 극대화’을 위한 첫 번째 행보다.', ref: '#', time: "13분전" },
        { id: 2, main: false, img: 'https://wimg.mk.co.kr/svc/desking/1000/index/202406/A11032065_29_20240603145532.png', title: '"인뱅금리도 못 믿겠네"... 젋은 직장인들, 이젠 3년 6.9% "청년도약계좌"에 몰린다', paper: '인터넷은행과 저축은행들이 예·적금 금리를 줄줄이 내리면서 목돈 마련이 쉽지않은 가운데 ‘청년도약계좌’가 다시 주목받고 있다. 3일 은행연합회 공시에 따르면 이날 카카오뱅크와 케이뱅크의 정기예금 금리(1년)는 각각 3.3%, 3.5%로 한국은행의 기준금리 3.5%에도 못 미치는 수준이다. 카카오뱅크는 지난달 평균금리(3.4%)보다 0.1% 포인트 인하됐다. 케이뱅크도 기존보다 0.05% 포인트 내렸다.', ref: '#', time: "13분전" },
        { id: 3, main: false, img: 'https://wimg.mk.co.kr/svc/desking/1000/index/202406/A11031969_29_20240603142422.png', title: '올해도 금사과?... 농식품부 장관 "사과 생샨량 평년 수준 될듯"', paper: '송미령 농림축산식품부 장관은 3일 “지금까지 기상, 생육상황을 고려하면 올해 사과 생산량은 평년 수준(49만t)이 될 것으로 전망한다”고 말했다.송 장관은 이날 사과 주산지인 충남 예산군 사과 농가와 농업기술센터를 찾아 사과 생육을 살피고 재해 예방시설 현황을 점검했다.', ref: '#', time: "13분전" },
        { id: 4, main: false, img: 'https://wimg.mk.co.kr/svc/desking/1000/index/202406/A11032065_29_20240603145532.png', title: '"인뱅금리도 못 믿겠네"... 젋은 직장인들, 이젠 3년 6.9% "청년도약계좌"에 몰린다', paper: '인터넷은행과 저축은행들이 예·적금 금리를 줄줄이 내리면서 목돈 마련이 쉽지않은 가운데 ‘청년도약계좌’가 다시 주목받고 있다. 3일 은행연합회 공시에 따르면 이날 카카오뱅크와 케이뱅크의 정기예금 금리(1년)는 각각 3.3%, 3.5%로 한국은행의 기준금리 3.5%에도 못 미치는 수준이다. 카카오뱅크는 지난달 평균금리(3.4%)보다 0.1% 포인트 인하됐다. 케이뱅크도 기존보다 0.05% 포인트 내렸다.', ref: '#', time: "13분전" },
        { id: 5, main: false, img: 'https://wimg.mk.co.kr/svc/desking/1000/index/202406/A11031969_29_20240603142422.png', title: '올해도 금사과?... 농식품부 장관 "사과 생샨량 평년 수준 될듯"', paper: '송미령 농림축산식품부 장관은 3일 “지금까지 기상, 생육상황을 고려하면 올해 사과 생산량은 평년 수준(49만t)이 될 것으로 전망한다”고 말했다.송 장관은 이날 사과 주산지인 충남 예산군 사과 농가와 농업기술센터를 찾아 사과 생육을 살피고 재해 예방시설 현황을 점검했다.', ref: '#', time: "13분전" },
        { id: 6, main: false, img: 'https://wimg.mk.co.kr/svc/desking/1000/index/202406/A11032065_29_20240603145532.png', title: '"인뱅금리도 못 믿겠네"... 젋은 직장인들, 이젠 3년 6.9% "청년도약계좌"에 몰린다', paper: '인터넷은행과 저축은행들이 예·적금 금리를 줄줄이 내리면서 목돈 마련이 쉽지않은 가운데 ‘청년도약계좌’가 다시 주목받고 있다. 3일 은행연합회 공시에 따르면 이날 카카오뱅크와 케이뱅크의 정기예금 금리(1년)는 각각 3.3%, 3.5%로 한국은행의 기준금리 3.5%에도 못 미치는 수준이다. 카카오뱅크는 지난달 평균금리(3.4%)보다 0.1% 포인트 인하됐다. 케이뱅크도 기존보다 0.05% 포인트 내렸다.', ref: '#', time: "13분전" },
        { id: 7, main: false, img: 'https://wimg.mk.co.kr/svc/desking/1000/index/202406/A11031969_29_20240603142422.png', title: '올해도 금사과?... 농식품부 장관 "사과 생샨량 평년 수준 될듯"', paper: '송미령 농림축산식품부 장관은 3일 “지금까지 기상, 생육상황을 고려하면 올해 사과 생산량은 평년 수준(49만t)이 될 것으로 전망한다”고 말했다.송 장관은 이날 사과 주산지인 충남 예산군 사과 농가와 농업기술센터를 찾아 사과 생육을 살피고 재해 예방시설 현황을 점검했다.', ref: '#', time: "13분전" },
      ]
    

    function handleInfo(btn: any) {
        console.log("handelCharts : ", btn)
        const enums: any = {
            1: <StockInfo />,
            2: <StockLog />,
            3: "뉴스크롤링 ㅋ",
            4: <NewsToday title="최신뉴스" newslist={news} />,
            5: <div ><a href="/stock/stockchat/1">종목 토론방을 만들긴 함</a></div>
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
                            <TabButton text="종합" path={() => setBtn(1)} color='' select={btn==1} />
                            <TabButton text="시세" path={() => setBtn(2)} color='' select={btn==2} />
                            <TabButton text="재무정보" path={() => setBtn(3)} color='' select={btn==3} />
                            <TabButton text="관련뉴스" path={() => setBtn(4)} color='' select={btn==4} />
                            <TabButton text="종목토론" path={() => setBtn(5)} color='' select={btn==5} />
                        </div>
                        <div className="p-5" >{handleInfo(btn)}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Stock;