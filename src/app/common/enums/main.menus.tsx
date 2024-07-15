import Timer from "@/app/component/util/timer"

export const HeaderMenus: IMenu[] =[
    { id: 1, title: "ggunLogo", href: `/` },
    { id: 2, title: "Finance", href: `/asset/list`},
    { id: 3, title: "호가 매매", href: `/trade`},
    { id: 4, title: "주식 거래량 랭킹", href: `/stock`},
    { id: 5, title: "경제 News", href: `/news` },
    { id: 6, title: "고객센터", href: `/articles/list/2` },
    { id: 7, title: <Timer />, href: `` },
    { id: 8, title: "Login", href: `/login` },
]

export const FinanceMenus: IMenu[] = [
    { id: 2, title: "거래내역", href: `/asset/histories/2` },
    { id: 4, title: "계좌이체/충전", href: `/asset/account/trade` },
]

export const AcountMenus: IMenu[] = [
    { id: 2, title: "거래내역", href: `/asset/histories/2` },
    { id: 4, title: "계좌이체/충전", href: `/asset/account/trade` },
]

export const BoardMenus: IMenu[] = [
    { id: 1, title: "자주하는 질문", href: `/articles/list/2` },
    { id: 2, title: "QnA /1:1문의", href: `/articles/list/1` },
    { id: 3, title: "공지사항", href: `/articles/list/3` },
    { id: 4, title: "이벤트", href: `/articles/list/4` },
    //q&n :1 , 자주하는 질문 :2 , 공지사항 : 3, 이벤트 게시판 : 4
]

export const StockMenus: IMenu[] = [
    { id: 1, title: "종목종합", href: `/stock/list` },
    { id: 2, title: "종목상세", href: `/stock` },
    { id: 3, title: "종목별 레포트", href: `/stock` },
    { id: 4, title: "종목 토론 게시판", href: `/stock/chat` },
]

export const AiMenus: IMenu[] = [
    { id: 1, title: "AI 거래내역", href: `/asset/histories/1` },
    { id: 2, title: "AI 있음", href: `/asset/ai/exist/existTrue` },
    { id: 3, title: "AI 없음", href: `/asset/ai/exist/existFalse` },
    { id: 4, title: "AI 보유주식", href: `/asset/ai/exist/existFalse` },
    { id: 5, title: "계좌이체", href: `/ai/trade` },
]