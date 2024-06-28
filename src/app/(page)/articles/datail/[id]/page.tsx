'use client'

import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "@/app/component/navigation/pagination";

const Articles: NextPage = ({ params }: any) => {

    const dispatch = useDispatch();
    // const articlesList: IArticle[] = useSelector(getAllArticles);

    // const [allArticles, setAllArticles] = useState<IArticle[]>([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const offset = (page - 1) * limit;

    useEffect(() => {
        //hard
        // const maplist = params.id == 1 ? qnalist : articles;

        //prisma
        // myArticleList(params.id)
        //     .then((res:any) => {
        //         setAllArticles(res);
        //     })
        //     .catch((error: any) => {
        //         console.log("articles err!!! : " + error);
        //     });

        //spring
        // dispatch(fetchMyArticleList(params.id))
        //     .then((res: any) =>
        //        console.log(res)
        //     )
        // .catch((error: any) =>
        //     console.log("articles err!!! : " + error))
}, []);

const arricle = [
    1, '비밀번호를 잊어버렸어요', '비밀번호를 잃어버렸는데 어떻게 처리해야 할까요?' ,'홈페이지 하단의 고객센터에 연락해주시면 빠르게 처리해드리도록하겠습니다.\n고객센터 운영시간은 오전 9시~6시 이며 점심시간은 12시~1시 입니다. 감사합니다.'
]    

return (
    <div className="w-full h-full flex-col flex items-center">
        <div className="w-[85%] p-3 border">
        <div className="bold text-[32px]">제목 : {arricle[1]}<hr /><br /></div>
        <div className="border bg-slate-300 text-pretty">
        <div className="">{arricle[2]}</div>
        <div className="">{arricle[3]}</div>
        </div>
        </div>
    </div>
)
};

export default Articles;
