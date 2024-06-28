'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { usePathname } from 'next/navigation'


function Header() {

    const router = useRouter();
    const [showProfile, setShowProfile] = useState(false);
    const [active, setActive] = useState<number>(0);
    const pathName = usePathname();

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

     const HeaderMenus: Imenu[] =[
        { id: 1, title: "ggunLogo", href: `/` },
        { id: 2, title: "News", href: `/news` },
        { id: 3, title: "거래내역", href: `/account`},
        { id: 4, title: "주식조회", href: `/stock`},
        { id: 5, title: "고객센터", href: `/articles/list/2` },
    ]
    
     const AcountMenu: Imenu[] = [
        { id: 1, title: "주식거래내역", href: `/account` },
        { id: 2, title: "은행거래내역", href: `/account` },
    
    ]
    
     const ServiceMenu: Imenu[] = [
        { id: 1, title: "자주하는 질문", href: `/articles/list/2` },
        { id: 2, title: "QnA /1:1문의", href: `/articles/list/1` },
        { id: 3, title: "공지사항", href: `/articles/list/3` },
        { id: 4, title: "이벤트", href: `/articles/list/4` },
        //q&n :1 , 자주하는 질문 :2 , 공지사항 : 3, 이벤트 게시판 : 4
    ]
    
    
    return (
        <nav className="w-screen">
            <div className="flex justify-center">
                <ul className="grid grid-cols-7 justify-center gap-5 border h-[70px] w-[85%] shadow-sm rounded-b-lg bg-white">
                    {HeaderMenus.map((hover: Imenu, i: number) => (
                        <li key={hover.id} className="group/item">
                            <Link className={`flex hover:border-t-2 hover:border-pebble-500 h-[70px] w-full text-center justify-center items-center checked:border ${pathName == hover.href ? 'border-pebble-500 border-t-2': '' }`}
                                href={hover.href}>{hover.title}</Link>

                            <a className="relative top-2 group/edit hidden group-hover/item:block h-[1px] ">
                                <div className="h-auto bg-white rounded-lg">
                                    {hover.title == "거래내역" ?
                                        <ul className="text-center py-2 items-center justify-center border rounded-lg shadow-sm ">
                                            {AcountMenu.map((hover2: Imenu, i: number) => (
                                                <li key={hover2.id} className=""><Link className="hover:text-pebble-500 w-full py-2 " href={hover2.href}>{hover2.title}</Link></li>
                                            ))}
                                        </ul>
                                        : <div></div>}

                                    {hover.title == "고객센터" ?
                                        <ul className="text-center py-2 items-center justify-center border rounded-lg shadow-sm ">
                                            {ServiceMenu.map((hover2: Imenu, i: number) => (
                                                <li key={hover2.id} className=""><Link className="hover:text-pebble-500 w-full py-2 " href={hover2.href}>{hover2.title}</Link></li>
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