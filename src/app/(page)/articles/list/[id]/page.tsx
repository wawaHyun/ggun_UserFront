
import Articles from "@/app/component/articles/articles";
import OftenQuestionsBox from "@/app/component/articles/oftenQuestions";
import { Suspense } from "react";

async function ArticleList({ params }: any) {

    function handleInfo() {
        //q&n :1 , 자주하는 질문 :2 , 공지사항 : 3, 이벤트 게시판 : 4
        const enums: any = {
            1: "QnA /1:1문의",
            2: "자주하는 질문",
            3: "공지사항",
            4: "이벤트",
        };
        return <div>{enums[params.id]}</div>;
    };

    return (
        <div className="w-full h-full ">
            <div className="m-auto bg-pebble-200 text-[32px] rounded-b-lg text-center w-[80%]">
                {handleInfo()}</div>
            {params.id == 2 ?
                <div className="grid-cols-5 w-[80%] m-auto my-2">
                    <OftenQuestionsBox />
                </div>
                : <div></div>}

            <div className="m-auto w-[80%] bg-white">
                <Suspense>
                    <Articles id={params.id} />
                </Suspense>
            </div>
        </div>
    )
};

export default ArticleList;
