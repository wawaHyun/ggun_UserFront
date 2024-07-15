import { IAccount } from "@/app/api/model/account.model";
import { tradeDummy } from "@/app/common/dummy/account.dummy";
import { WhiteBox } from "@/app/component/style/whiteBox";

export default function AiExistTrue(){

    const myAccInfo = tradeDummy[0];
    const accInfo = tradeDummy;

    return(
        <div className="w-full h-full">
            <div className="w-[80%]">
                <WhiteBox>
                    <div>계좌종류 : AI 자동 매매</div>
                    <div>계좌번호 : {myAccInfo.acno}</div>
                    <div>잔액 : {myAccInfo.balance}</div>
                </WhiteBox>

<div>
</div>
<table className="sticky z-[0] p-4">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th className="span-col-2">보유주식</th>
                            <th>주식수량</th>
                            <th>평균매입가</th>
                            <th>현재매도예상액</th>
                            <th>잔액</th>
                            <th>뭐하지</th>
                            <th>뭐하지</th>
                        </tr>
                    </thead>
                    <tbody>
                        {accInfo.map((v: IAccount, i: any) =>
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
}