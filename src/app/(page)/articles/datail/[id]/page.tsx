import { findArticleById } from "@/app/api/articles/route";


async function ArticleDetail({params}:any) {

    const article = await findArticleById(params.id);

return (
    <div className="w-full h-full flex-col flex items-center">
        <div className="w-[85%] p-3 border">
        <div className="bold text-[32px]">제목 : {article.title}<hr /><br /></div>
        <div className="border bg-slate-300 text-pretty">
        <div className="">{article.content}</div>
        <div className="">{article.id}</div>
        </div>
        </div>
    </div>
)
};
