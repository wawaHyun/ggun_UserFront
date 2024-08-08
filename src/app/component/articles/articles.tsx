import { fetchMyArticleList } from "@/app/service/articles/articles.api"
import { articlesDummy, qnalistDummy } from "@/app/common/dummy/articles.dummy"
import Link from "next/link"
import { useQuery } from "@tanstack/react-query"


export default async function Articles({ prop }: { prop: string }) {

    const fetchData= async (): Promise<IArticle[]> => {
        const response = await fetchMyArticleList(prop)
        if ('status' in response) {
            throw new Error(`Error: ${response.status}`);}
        return response;
    }
    
    // const { data } = useQuery<IArticle[]>(
    //     {
    //         queryKey: ["actricleList"],
    //         // queryFn: fetchData,
    //         placeholderData: articlesDummy,
    //     }
    // );

    const data =articlesDummy;

    return (
        <table className="">
            <thead>
                <tr>
                    <th>No.</th>
                    {/* <th>게시판</th> */}
                    <th>제목</th>
                    <th>내용</th>
                    <th>작성일</th>
                    {/* <th>처리완료일</th> */}
                </tr>
            </thead>
            <tbody>
                {data&&data.map((v: IArticle, i: number) =>
                    <tr key={v.id}>
                        <td>{v.id}</td>
                        {/* <td>{v.boardId}</td> */}
                        <td><Link href={{
                            pathname: `/articles/detail/${v.id}`, query: {
                                title: v.title, content: v.content, writerId: v.writerId, regDate: v.regDate, modDate: v.modDate
                            }
                        }}>{v.title}</Link></td>
                        {/* <td>{v.writerId}</td> */}
                        <td><Link href={{
                            pathname: `/articles/detail/${v.id}`, query: {
                                title: v.title, content: v.content, writerId: v.writerId, regDate: v.regDate, modDate: v.modDate
                            }
                        }}>{v.content}</Link></td>
                        {/* <td>{v.regDate}</td> */}
                        <td>{v.modDate}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}