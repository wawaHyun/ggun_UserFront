
import { myArticleList } from "@/app/api/articles/route";
import { articlesDummy } from "@/app/common/dummy/articles.dummy";

export async function ArticleDetail({params}:any) {

const article = articlesDummy

return (
    <div className="w-full h-full flex-col flex items-center">
        <div className="w-[85%] p-3 border">
        <div className="bold text-[32px]">제목 : {article[1].title}<hr /><br /></div>
        <div className="border bg-slate-300 text-pretty">
        <div className="">{article[1].content}</div>
        <div className="">{article[1].id}</div>
        </div>
        </div>
    </div>
)
};
