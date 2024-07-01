
import { IAccount } from "@/app/api/model/account.model";
import { accountHistories, allAccount } from "@/app/api/account/route";
import { accDummy, tradeDummy } from "@/app/common/dummy/account.dummy";

async function Account() {

    const addTrade = await accountHistories();
    const accList = await allAccount();

    const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    
    return (
        <div className="w-full h-full flex justify-center ">
            <div className="w-[85%] flex-col flex text-center items-center">
                <div className="grid grid-cols-2 w-[50%]">
                    <label htmlFor="">계좌선택 : </label>
                    <select name="" id="">
                        {accList.map((i:any) =>
                            <option value="" key={i.id}>{i.acno}</option>)}
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
                            <th>종류</th>
                            <th>입금</th>
                            <th>출금</th>
                            <th>거래명</th>
                            <th>잔액</th>
                            <th>적요</th>
                            <th>연결계좌번호</th>
                        </tr>
                    </thead>
                    <tbody>
                        {addTrade.map((v: IAccount, i: any) =>
                            <tr key={v.id}>
                                <td>{v.id}</td>
                                <td>{v.modDate}</td>``
                                <td>{v.bank}</td>``
                                <td>{v.acType == "입금" ? v.balance : 0}</td>
                                <td>{v.acType == "출금" ? v.balance : 0}</td>
                                <td>{v.balance}</td>
                                <td>{v.bank}</td>
                                <td>{v.refundAcno}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
};
export default Account;