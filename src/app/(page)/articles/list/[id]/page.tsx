'use client'

import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "@/app/component/navigation/pagination";
import { Search } from "@/app/component/search/search";
import { useRouter } from "next/navigation";
import { fetchMyArticleList } from "@/app/redux/service/article.service";

const Board: NextPage = ({ params }: any) => {

    const dispatch = useDispatch();
    const router = useRouter()
        ;    // const articlesList: IArticle[] = useSelector(getAllArticles);

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
        dispatch(fetchMyArticleList(params.id))
            .then((res: any) =>
               console.log(res)
            )
        .catch((error: any) =>
            console.log("articles err!!! : " + error))

       console.log("articles: ",params.id)
    }, [params.id, dispatch]);

    const qnalist = [
        { id: 1, title: "관리자 권한 설정", content: "관리자 권한 설정입니다. 아래 공문 확인하여 자세한 내용 확인 부탁드리며, 관련 문의는", writer: "홍길동", answer: "답변완료", modDate: "24-04-10" },
        { id: 2, title: "로그인 관련 공지", content: "로그인 관련 공지입니다. 아래 공문 확인하여 자세한 내용 확인 부탁드리며, 관련 문의는", writer: "김이박", answer: "답변완료", modDate: "24-04-12" },
        { id: 3, title: "비번 초기화 관련 공지사항", content: "비번 초기화 관련 공지사항입니다. 아래 공문 확인하여 자세한 내용 확인 부탁드리며, 관련 문의는", writer: "박하나", answer: "답변완료", modDate: "24-04-14" },
        { id: 4, title: "사내 동아리 양식 공지", content: "사내 동아리 양식 공지입니다. 아래 공문 확인하여 자세한 내용 확인 부탁드리며, 관련 문의는", writer: "김현식", answer: "답변완료", modDate: "24-04-16" },
        { id: 5, title: "금일자 사내 보안관련 공지", content: "금일자 사내 보안관련 공지 업데이트입니다. 아래 공문 확인하여 자세한 내용 확인 부탁드리며, 관련 문의는", writer: "권상무", answer: "답변완료", modDate: "24-04-25" },
        { id: 6, title: "데이터 백업관련 공지", content: "빠른 처리 부탁드립니다.입니다. 아래 공문 확인하여 자세한 내용 확인 부탁드리며, 관련 문의는", writer: "한이솝", answer: "답변완료", modDate: "24-05-06" },
        { id: 7, title: "신입사원 제출서류 공지사항", content: "공지사항입니다.입니다. 아래 공문 확인하여 자세한 내용 확인 부탁드리며, 관련 문의는", writer: "한두리", answer: "답변완료", modDate: "24-05-10" },
        { id: 8, title: "퇴사자 작성 및 제출서류 공지사항", content: "퇴사자 작성 및 제출서류 공지사항입니다. 아래 공문 확인하여 자세한 내용 확인 부탁드리며, 관련 문의는", writer: "양대리", answer: "답변완료", modDate: "24-05-17" },
        { id: 9, title: "24년 5월 발령 공지", content: "4년 5월 발령 공지입니다. 아래 공문 확인하여 자세한 내용 확인 부탁드리며, 관련 문의는", writer: "회계팀", answer: "처리중", modDate: "24-05-19" },
        { id: 10, title: "관리자 페이지 리뉴얼 공지", content: "관리자 페이지 리뉴얼 공지입니다. 아래 공문 확인하여 자세한 내용 확인 부탁드리며, 관련 문의는", writer: "이민수", answer: "처리중", modDate: "24-06-02" },
        { id: 11, title: "본사 6층 화장실 공사 안내", content: "본사 6층 화장실 공사 안내입니다. 아래 공문 확인하여 자세한 내용 확인 부탁드리며, 관련 문의는", writer: "엄나라", answer: "처리중", modDate: "24-06-05" },
        { id: 12, title: "24년 6월 발령 공지", content: "24년 6월 발령 공지입니다. 아래 공문 확인하여 자세한 내용 확인 부탁드리며, 관련 문의는", writer: "한영희", answer: "처리중", modDate: "24-06-10" },
    ]

    const articles = [
        { id: 1, title: "관리자 권한 문의", content: "관리자 권한 설정에 관한 문의...", writer: "홍길동", answer: "답변완료", modDate: "24-04-10" },
        { id: 2, title: "로그인이 안돼요", content: "어제는 됐는데 오늘하려고 하니까...", writer: "김이박", answer: "답변완료", modDate: "24-04-12" },
        { id: 3, title: "비번 초기화", content: "비밀번호 초기화 문의 드립니...", writer: "박하나", answer: "답변완료", modDate: "24-04-14" },
        { id: 4, title: "사내 동아리 양식 문의", content: "사내 동아리 개설 관련한 문서 양식은 어디서 다운받아야 하나요?", writer: "김현식", answer: "답변완료", modDate: "24-04-16" },
        { id: 5, title: "사내 공지사항에 오타", content: "사내 공지사항 [내부 보안 설정에 관한 공지]에 오타를 발견하여...", writer: "권상무", answer: "답변완료", modDate: "24-04-25" },
        { id: 6, title: "비밀번호 초기화 부탁드립니다", content: "빠른 처리 부탁드립니다.", writer: "한이솝", answer: "답변완료", modDate: "24-05-06" },
        { id: 7, title: "비밀번호 초기화", content: "ㅠㅠ 초기화 부탁드립니다..", writer: "한두리", answer: "답변완료", modDate: "24-05-10" },
        { id: 8, title: "데이터 초기화 여부", content: "어제 오후 5시 23분경 지웠던 내용 백업 있을까요ㅠ", writer: "양대리", answer: "답변완료", modDate: "24-05-17" },
        { id: 9, title: "금일 발령자 공지사항 수정", content: "아래 공문 참고하여 공지사항 수정 하려는데...", writer: "회계팀", answer: "처리중", modDate: "24-05-19" },
        { id: 10, title: "관리자 페이지 오류", content: "대쉬보드에서 다른 페이지로 넘어가려는데...", writer: "이민수", answer: "처리중", modDate: "24-06-02" },
        { id: 11, title: "비번 바꿔주세요", content: "비번 너무 많이 틀려서 로그인이 안됩니다..", writer: "엄나라", answer: "처리중", modDate: "24-06-05" },
        { id: 12, title: "자택 근무자 접속 안돼요", content: "방화벽 낮춰도 접속 막혀져 있는데 어떻게 해야 하나요?", writer: "한영희", answer: "처리중", modDate: "24-06-10" },
    ]

    const qqq = [
        [1, "비밀번호 초기화"],
        [2, "페이지 오류"],
        [3, "계좌개설"],
        [4, "개인정보 삭제"],
        [5, "공모주 신청방법"],
        [6, "금융사기"],
        [7, "비밀번호 초기화"],
        [8, "페이지 오류"],
        [9, "계좌개설"],
        [10, "개인정보 삭제"],
        [11, "공모주 신청방법"],
        [12, "금융사기"],
    ]

    function handleColor() {
        const number = Math.floor(Math.random() * 5);
        console.log("number : ", number)
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
        console.log("number : ", number)
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
                    <Search text="자주하는 질문 검색" path="" />
                    {qqq.map((i) =>
                        <span onClick={() => router.push(`/articles/${i[0]}`)} className={`cursor-pointer hover:text-black text-clip p-3 ${handleColor()} ${handleSize()}`}>{i[1]}</span>
                    )}
                </div>
                : <div></div>}

            <div className="m-auto w-[80%] bg-white">
                <table className="sticky z-[0] p-4">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>내용</th>
                            <th>borad id</th>
                            <th>작성일</th>
                            <th>처리완료일</th>
                        </tr>
                    </thead>
                    <tbody>
                        {qnalist.slice(offset, offset + limit).map((v: any, i: any) =>
                            <tr key={v.id}>
                                <td>{v.id}</td>
                                <td>{v.title}</td>
                                <td>{v.writer_id}</td>
                                <td>{v.content}</td>
                                <td>{v.board_id}</td>
                                <td>{v.regDate}</td>
                                <td>{v.modDate}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <div className="w-full items-center flex justify-center h-[50px]">
                    <Pagination total={qnalist.length} limit={10} page={page} setPage={setPage} />
                </div>
            </div>
        </div>
    )
};

export default Board;
