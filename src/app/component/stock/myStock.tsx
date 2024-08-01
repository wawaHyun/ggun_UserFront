import { myStockDummy } from "@/app/common/dummy/account.dummy";
import Link from "next/link";


export default async function MyStocks () {

    const myStockList = myStockDummy;
    return (
    <div className="w-full h-full flex justify-center">
        <div className="w-[50%]">
            <div className="">
            <table className="">
            <thead>
                <tr>
                    <th>No.</th>
                    <th>종목명</th>
                    <th>평가손익</th>
                    <th>보유수량</th>
                    <th>매수금액</th>
                </tr>
            </thead>
            <tbody>
                {myStockList.map((v: any, i: number) =>
                    <tr key={i}>
                        <td>{v.stock}</td>
                        <td>{v.price}</td>
                        <td>{v.volume}</td>
                        <td>{v.total}</td>
                    </tr>
                )}
            </tbody>
        </table>
            </div>
        </div>
    </div>
    )

}