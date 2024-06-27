'use client'
import Pagination from "@/app/component/navigation/pagination";
import { useState } from "react";
import { useDispatch } from "react-redux";

function Account() {

    const dispatch = useDispatch();

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const offset = (page - 1) * limit;

    const account = [
        { id: 1, account: "111-111-555555" },
        { id: 2, account: "222-222-555555" },
        { id: 3, account: "333-333-555555" },
    ]

    const trade = [
        { id: 1, date: "24-6-1", name: '삼성전자', code: 1, memo: '', mome2: '', deposit: '3000', withdrawal: '' },
        { id: 1, date: "24-6-4", name: 'LG디스플레이', code: 1, memo: '', mome2: '', deposit: '', withdrawal: '4000' },
        { id: 1, date: "24-6-5", name: 'SK하이닉스', code: 1, memo: '', mome2: '', deposit: '8000', withdrawal: '' },
        { id: 1, date: "24-6-6", name: '삼성전자', code: 1, memo: '', mome2: '', deposit: '', withdrawal: '5000' },
    ]

    const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    return (
        <div className="w-full h-full flex justify-center ">
            <div className="w-[85%] flex-col flex text-center items-center">
                <div className="grid grid-cols-2 w-[50%]">
                    <label htmlFor="">계좌선택 : </label>
                    <select name="" id="">
                        {account.map((i) =>
                            <option value="" key={i.id}>{i.account}</option>)}
                    </select>

                    <label htmlFor="">월별조회 : </label>
                    <select name="" id="">
                        {month.map((i) =>
                            <option value="" key={i}>{i}월</option>)}
                    </select>

                    <label htmlFor="">조회일자 : </label>
                    <div className="flex w-[300px]">
                    <input type="text" value="년" className="w-1/3"/>
                    <input type="text" value="월" className="w-1/3"/>
                    <input type="text" value="일" className="w-1/3"/>
                    <div>달력넣을 거임~!~!</div>
                    </div>
                </div>

                <table className="sticky z-[0] p-4">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>거래일자</th>
                            <th>입금</th>
                            <th>출금</th>
                            <th>거래명</th>
                            <th>잔액</th>
                            <th>적요</th>
                            <th>메모</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trade.slice(offset, offset + limit).map((v: any, i: any) =>
                            <tr key={v.id}>
                                <td>{v.id}</td>
                                <td>{v.date}</td>
                                <td>{v.deposit}</td>
                                <td>{v.withdrawal}</td>
                                <td>{v.name}</td>
                                <td>{v.memo1}</td>
                                <td>{v.memo2}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <div className="w-full items-center flex justify-center h-[50px]">
                    <Pagination total={trade.length} limit={10} page={page} setPage={setPage} />
                </div>
            </div>
        </div>
    )
};
export default Account;