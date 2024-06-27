'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";


function Header() {

    const router = useRouter();
    const [showProfile, setShowProfile] = useState(false)
    const [active, setActive] = useState<number>(0)

    const memus = [
        { id: 1, title: "ggunLogo", address: () => {router.push(`/`), setActive(1)} },
        { id: 2, title: "News", address: () => {router.push(`/news`),setActive(2)} },
        { id: 3, title: "거래내역", address: () => {router.push(`/account`),setActive(3)} },
        { id: 4, title: "주식조회", address: () => {router.push(`/stock`),setActive(4)} },
        { id: 5, title: "고객센터", address: () => {router.push(`/board/2`),setActive(5)} },
    ]

    const acountMenu: ISubmenu[] = [
        { id: 1, title: "주식거래내역", address: () => router.push(`/account`) },
        { id: 2, title: "은행거래내역", address: () => router.push(`/account`) },
    ]

    const serviceMenu: ISubmenu[] = [
        { id: 1, title: "자주하는 질문", address: () => router.push(`/board/2`) },
        { id: 2, title: "QnA /1:1문의", address: () => router.push(`/board/1`) },
        { id: 3, title: "공지사항", address: () => router.push(`/board/3`) },
        { id: 4, title: "이벤트", address: () => router.push(`/board/4`) },
        //q&n :1 , 자주하는 질문 :2 , 공지사항 : 3, 이벤트 게시판 : 4
    ]



    const logoutHandler = () => {
        // console.log('로그아웃 적용 전 : ' + parseCookies().accessToken)
        // logout()
        //   .then((res: any) => {
        //     destroyCookie(null, 'accessToken')
        //     setShowProfile(false)
        //     router.push('/')
        //   })
        //   .catch((err: any) => {
        //     console.log('logout 실행에서 에러가 발생함' + err)
        //   })
    }

    const logout = async () => {
        // try {
        //   const response = await LogoutUser(5);
        //   return response
        // }
        // catch (error) {
        //   console.log(error)
        // }
    }
    return (
        <nav className="w-screen">
            <div className="flex justify-center">
                <ul className="grid grid-cols-7 justify-center gap-5 border h-[70px] w-[85%] shadow-sm rounded-b-lg bg-white">
                    {memus.map((hover: ISubmenu, i: number) => (
                        <li key={hover.id} className="group/item">
                            <button className={`flex hover:border-t-2 hover:border-pebble-500 h-[70px] w-full text-center justify-center items-center checked:border ${active == hover.id ? 'border-pebble-500 border-t-2': '' }`}
                                onClick={hover.address}>{hover.title}</button>

                            <a className="relative top-2 group/edit hidden group-hover/item:block h-[1px] ">
                                <div className="h-auto bg-white rounded-lg">
                                    {hover.title == "거래내역" ?
                                        <ul className="text-center py-2 items-center justify-center border rounded-lg shadow-sm ">
                                            {acountMenu.map((hover2: ISubmenu, i2: number) => (
                                                <li key={hover2.id} className=""><button className="hover:text-pebble-500 w-full py-2 " onClick={hover2.address}>{hover2.title}</button></li>
                                            ))}
                                        </ul>
                                        : <div></div>}

                                    {hover.title == "고객센터" ?
                                        <ul className="text-center py-2 items-center justify-center border rounded-lg shadow-sm ">
                                            {serviceMenu.map((hover2: ISubmenu, i2: number) => (
                                                <li key={hover2.id} className=""><button className="hover:text-pebble-500 w-full py-2 " onClick={hover2.address}>{hover2.title}</button></li>
                                            ))}
                                        </ul>
                                        : <div></div>}
                                </div>
                            </a>

                        </li>
                    ))}
                </ul>
            </div>
        </nav >

    );
}
export default Header;