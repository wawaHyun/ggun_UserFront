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
            window.scrollY > 10 ? setShowHeader(false) : setShowHeader(true);
        };
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