import { FirstMemus } from "@/app/common/enums/menus";
import Link from "next/link";

function FirstMenu() {


    return (
        <nav className="w-full h-full bg-pebble-500">
            <ul className="w-full h-full grid grid-cols-7">
                <li> <button className="bg-amber-200 h-full w-full text-right justify-center items-center px-3">처음오셨나요?</button></li>
                <li className="overflow-hidden justify-right flex"> 
                    <div className="bg-amber-200 origin-bottom -rotate-45 -translate-y-6 ring-[33px] ring-offset-0 ring-amber-200 h-[30px] w-[150px]"></div>
                </li>
                {FirstMemus.map((hover: IMenu, i: number) => (
                    <li key={hover.id} className="">
                        <Link className="hover:text-lg text-white h-full w-full text-center justify-center items-center"
                            href={hover.href}>{hover.title}</Link>
                    </li>))}
            </ul>
        </nav>
    );
}

export default FirstMenu;