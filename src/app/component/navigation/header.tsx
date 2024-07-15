'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation'
import { AcountMenus, BoardMenus, HeaderMenus } from "@/app/common/enums/main.menus";
import HeaderLink from "../header/headerLink";


function Header() {

    const [showProfile, setShowProfile] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const pathName = usePathname();

    useEffect(() => {

        const handleScroll = () => {
            // 일정 구간 스크롤이 내려가면 버튼을 보여준다.
            window.scrollY > 10 ? setShowHeader(false) : setShowHeader(true);
        };

        // window에 scroll 이벤트를 넣는다.
        window.addEventListener('scroll', handleScroll);

    }, []);

    return (
        <nav className="w-screen flex justify-center ">
            <div className={`duration-500 ease-in-out transition-[width] border ${showHeader == true ? 'h-[70px] w-[85%]' : 'h-[40px] w-full'} shadow-sm rounded-b-lg bg-white`}>
                <HeaderLink />
            </div>
        </nav >

    );
}
export default Header;