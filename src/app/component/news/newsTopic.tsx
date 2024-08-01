import Image from "next/image"

export default async function NewsTopic({newslist}:{newslist?:INews[]}){

    // const todayNews:INews[] = await allNews()
    // const todayNews = newsDummy
    
    return(
        <div className="text-center grid grid-cols-5 gap-3">
        {newslist.slice(0,5).map((v: INews, i: any) =>
            <ul key={v.id} className="border text-center text-black hover:text-gray-500 hover:shadow-lg hover:border rounded-lg">
                <li className="flex justify-center h-[60%]">
                  <Image unoptimized src={v.imgSrc} height={150} width={300} alt={v.title} className="rounded-t-lg" />
                </li>
                <li className="p-2 h-[30%] ">{v.title}</li>
                {/* <li className="text-left text-gray-400 h-[10%]">{i.id}분전</li> */}
              </ul>
            )}
        </div>
    )
}