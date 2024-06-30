import Image from "next/image";
import Link from "next/link";

function NewsToday({title, newslist}:{title:string, newslist:INews[]}){
    return(
        <div className="mt-[40px]">
        <h1 className="border-b-black text-[30px] mb-5">{title} <hr /></h1>
        {newslist.map((v: INews, i: number) => (
              <Link key={v.id} ref={v.imgLink} href={""}>
              <div className="grid grid-flow-col border grid-cols-2 p-2 gap-2 flex text-center text-black mb-5 hover:shadow-lg hover:border rounded-lg">
                <div className="col-span-2 text-bold text-[25px] hover:text-gray-500 text-ellipsis pt-2">{v.title}</div>
                <div className="col-span-2 row-span-2 text-bold text-[16px] text-gray-500">{v.content}</div>
                <div className="row-span-3 ">
                  <Image unoptimized src={v.imgSrc} height={150} width={350} alt={v.title} className="rounded-r-lg" />
                </div>
              </div>
            </Link>
        ))}
      </div>
    )
};

export default NewsToday;