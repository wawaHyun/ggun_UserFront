import { oftenQuestions } from "@/app/common/dummy/articles.dummy";
import { Search } from "../search/search";
import Link from "next/link";

export default function OftenQuestionsBox() {
    
    function handleColor() {
        const number = Math.floor(Math.random() * 5);
        // console.log("number : ", number)
        const enums: any = {
            0: 'text-pebble-500',
            1: 'text-red-300',
            2: 'text-purple-300',
            3: 'text-amber-200',
            4: 'text-blue-300',
            5: 'text-green-300',
        };
        return enums[number];
    };

    function handleSize() {
        const number = Math.floor(Math.random() * 5);
        // console.log("number : ", number)
        const enums: any = {
            0: 'text-[32px]',
            1: 'text-[50px]',
            2: 'text-[16px]',
            3: 'text-[20px]',
            4: 'text-[45px]',
            5: 'text-base',
        };
        return enums[number];
    };


    return (
        <div>
            <Search text="자주하는 질문 검색" />
            {oftenQuestions.map((i) =>
                <Link href={`/articles/${i[0]}`} className={`cursor-pointer hover:text-black text-clip p-3 ${handleColor()} ${handleSize()}`}>{i[1]}</Link>
            )}
        </div>
    )
        ;
}