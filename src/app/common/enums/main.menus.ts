export const HeaderMenus: IMenu[] =[
    { id: 1, title: "ggunLogo", href: `/` },
    { id: 2, title: "News", href: `/news` },
    { id: 3, title: "거래내역", href: `/account/list`},
    { id: 4, title: "주식조회", href: `/stock`},
    { id: 5, title: "고객센터", href: `/articles/list/2` },
    { id: 6, title: " ", href: '#' },
    { id: 7, title: "Login", href: `/login` },
]

export const AcountMenus: IMenu[] = [
    { id: 1, title: "은행계좌목록", href: `/account/list` },
    { id: 2, title: "거래내역", href: `/account/histories` },
    { id: 2, title: "계좌이체", href: `/account/trade` },

]

export const BoardMenus: IMenu[] = [
    { id: 1, title: "자주하는 질문", href: `/articles/list/2` },
    { id: 2, title: "QnA /1:1문의", href: `/articles/list/1` },
    { id: 3, title: "공지사항", href: `/articles/list/3` },
    { id: 4, title: "이벤트", href: `/articles/list/4` },
    //q&n :1 , 자주하는 질문 :2 , 공지사항 : 3, 이벤트 게시판 : 4
]

