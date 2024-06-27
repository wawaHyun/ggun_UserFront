'use client'
import { BottomLlinButton } from "@/app/component/button/tabButton";
import { useRouter } from "next/navigation";
import { useState } from "react";

function BoardMenu() {

    const router = useRouter()
    const [isOpen, setIsOpen] = useState(0);

    const serviceMenu: ISubmenu[] = [
        { id: 1, title: "자주하는 질문", address: () => {router.push(`/board/2`),setIsOpen(1) }},
        { id: 2, title: "QnA /1:1문의", address: () => {router.push(`/board/1`),setIsOpen(2) }},
        { id: 3, title: "공지사항", address: () => {router.push(`/board/3`),setIsOpen(3) }},
        { id: 4, title: "이벤트", address: () => {router.push(`/board/4`),setIsOpen(4) }},
        //q&n :1 , 자주하는 질문 :2 , 공지사항 : 3, 이벤트 게시판 : 4
    ]

    return (
        <nav className="w-[150px] fixed top-[80px] left-3">

            <div className="absolute bg-white top-3 left-0 group p-1.5 border shadow-lg rounded-lg content-center w-[40px] h-auto">
                <button
                    className="flex flex-col justify-center items-center group relative w-full h-auto"
                    onClick={() => isOpen ==0 ? setIsOpen(1): setIsOpen(0)}>
                    <div className={`h-0.5 w-[100%] my-[15%] rounded-full bg-black transition ease transform duration-300 ${isOpen ? "rotate-45 translate-y-1.5  group-hover:opacity-100" : " group-hover:opacity-100"}`} />
                    <div className={`h-0.5 w-[100%] my-[15%] rounded-full bg-black transition ease transform duration-300} ${isOpen ? "opacity-0" : "group-hover:opacity-100"}`} />
                    <div className={`h-0.5 w-[100%] my-[15%] rounded-full bg-black transition ease transform duration-300 ${isOpen ? "-rotate-45 -translate-y-3.5  group-hover:opacity-100" : "group-hover:opacity-100"}`}
                    />
                </button>
            </div>

            {isOpen > 0 ?
                <div className="absolute top-6 rounded-lg left-0 h-auto w-auto mt-10 bg-white text-black border shadow-lg p-3">
                    {serviceMenu.map((v, i) =>
                        <div key={v.id} className="h-[30px] text-center my-5">
                            <BottomLlinButton text={v.title} path={v.address} color="" select={isOpen == v.id}/>
                        </div>
                    )}
                </div>
                : <div></div>}
        </nav>
    )
}
export default BoardMenu;