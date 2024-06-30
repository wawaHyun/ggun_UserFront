'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { usePathname } from 'next/navigation'
import { AcountMenus, BoardMenus, HeaderMenus } from "@/app/common/enums/menus";


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


    return (
        <nav className="w-screen">
            <div className="flex justify-center">
                <ul className="grid grid-cols-7 justify-center gap-5 border h-[70px] w-[85%] shadow-sm rounded-b-lg bg-white">
                    {HeaderMenus.map((hover: IMenu, i: number) => (
                        <li key={hover.id} className="group/item">
                            <Link className={`flex hover:border-t-2 hover:border-pebble-500 h-[70px] w-full text-center justify-center items-center checked:border ${pathName == hover.href ? 'border-pebble-500 border-t-2': '' }`}
                                href={hover.href}>{hover.title}</Link>

                            <div className="relative top-2 group/edit hidden group-hover/item:block h-[1px] ">
                                <div className="h-auto bg-white rounded-lg">
                                    {hover.title == "거래내역" ?
                                        <ul className="text-center py-2 items-center justify-center border rounded-lg shadow-sm ">
                                            {AcountMenus.map((hover2: IMenu, i: number) => (
                                                <li key={hover2.id} className=""><Link className="hover:text-pebble-500 w-full py-2 " href={hover2.href}>{hover2.title}</Link></li>
                                            ))}
                                        </ul>
                                        : <div></div>}

                                    {hover.title == "고객센터" ?
                                        <ul className="text-center py-2 items-center justify-center border rounded-lg shadow-sm ">
                                            {BoardMenus.map((hover2: IMenu, i: number) => (
                                                <li key={hover2.id} className=""><Link className="hover:text-pebble-500 w-full py-2 " href={hover2.href}>{hover2.title}</Link></li>
                                            ))}
                                        </ul>
                                        : <div></div>}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </nav >

    );
}
export default Header;