
import { newstitle } from "@/app/common/enums/news.menus";
import { useRouter } from "next/navigation";

export default function NewsHeader(){
    
    const router = useRouter()

    
    return (
        <div className="sticky top-0 bg-white group m-2 grid grid-cols-12 text-center w-full h-[10%] cursor-pointer border border-b-transparent rounded-t-lg content-center ">
          <span className=" text-bold text-[16px] text-black hover:text-gray-300" onClick={() => router.push(`/news`)}>Home</span>
          {newstitle.map((elem: IMenu, i: number) => {
            return (
              <div key={elem.id} onClick={() => { elem.href }} className="text-center text-black hover:text-gray-300">
                {elem.title}
              </div>
            );
          })}
        </div>
    )
}