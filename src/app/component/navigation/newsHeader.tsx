
import { newstitle } from "@/app/common/enums/news.menus";
import Link from "next/link";

export default function NewsHeader(){
    
    return (
        <div className="sticky top-0 bg-white group m-2 grid grid-cols-12 text-center w-full h-[10%] cursor-pointer border border-b-transparent rounded-t-lg content-center ">
          <Link href={`/news`}><span className=" text-bold text-[16px] text-black hover:text-gray-300">Home</span></Link>
          {newstitle.map((elem: IMenu, i: number) => {
            return (
              <Link key={elem.id} href={elem.href} className="text-center text-black hover:text-gray-300">
                {elem.title}
              </Link>
            );
          })}
        </div>
    )
}