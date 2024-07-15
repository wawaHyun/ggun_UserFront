'use client'

import { deposit, withdraw } from "@/app/api/account/route";
import { IAccount } from "@/app/api/model/account.model";
import { WhiteBox } from "@/app/component/style/whiteBox";
import { useState } from "react";
import Image from "next/image";
import { MoveButton } from "@/app/component/button/moveButton";
import { TabButton } from "@/app/component/button/tabButton";

export default function AccountTCharge() {

    const [btn, setBtn] = useState(0);
    const [accinfo, setAccInfo] = useState<IAccount>({
        id: 0,
        balance: 0,
        acType: '',
        //입금할때는 
    });

    const input = (info: string, name: string) => {
        setAccInfo({
            ...accinfo,
            [name]: info
        });
        console.log('accinfo : ' + JSON.stringify(accinfo))
    }

    const depositMoney = async () => {
        const result = await deposit(accinfo);
        return result
    }

    const withdrawMoney = async () => {
        const result = await withdraw(accinfo);
        return result
    }


    return (
        <div className="w-full h-full flex justify-center">
            <div className="w-[80%]">
                <WhiteBox style="text-center">
                {btn == 0 ?
                    <Image src={"/imgs/account.jpg"} width={900} height={300} alt={"account"}></Image>
                    :<Image src={"/imgs/card.jpg"} width={900} height={300} alt={"card"}></Image>}

                    <div className=" shadow-lg rounded-lg ">
                        <div className="h-[50px] grid grid-cols-2">
                            <TabButton click={() => setBtn(0)} select={btn == 0} >계좌이체</TabButton>
                            <TabButton click={() => setBtn(1)} select={btn == 1} >충전하기</TabButton>
                        </div>
                        <div className="p-5 border border-t-0" >
                            <div className="w-full h-full space-y-5">
                                {btn == 0 ?
                                    <div className="space-y-3">
                                        <div><input type="radio" name="actype" value="입금" className="w-5" />입금</div>
                                        <div><input type="radio" name="actype" value="출금" className="w-5" />출금</div>
                                        <div className="flex"><p className="w-1/2">출금계좌</p><input type="number" onChange={(e) => input(e.target.value, 'balance')} /></div>
                                        <div className="flex"><p className="w-1/2">계좌이체 금액</p><input type="number" onChange={(e) => input(e.target.value, 'balance')} /></div>
                                        <div className="flex"><p className="w-1/2">입금계좌</p><input type="number" onChange={(e) => input(e.target.value, 'balance')} /></div>
                                        <div className="w-full"><MoveButton style="w-[60%] h-[30px]">계좌이체 실행</MoveButton></div>
                                    </div>
                                    : <div></div>}

                                {btn == 1 ?
                                    <div className="space-y-3">
                                        <div>충전금액 선택</div>
                                        <div className="border"></div>
                                        <div><input type="radio" name="actype" value="입금" className="w-5" />50,000</div>
                                        <div><input type="radio" name="actype" value="출금" className="w-5" />100,000</div>
                                        <div><input type="radio" name="actype" value="출금" className="w-5" />500,000</div>
                                        <div><input type="radio" name="actype" value="출금" className="w-5" />1,000,000</div>
                                        <div><input type="radio" name="actype" value="출금" className="w-5" />5,00,000</div>
                                        <div className="w-full"><MoveButton style="w-[60%] h-[30px]">신용카드 충전하기</MoveButton></div>
                                    </div>
                                    : <div></div>}

                            </div>
                        </div>
                    </div>
                </WhiteBox>
            </div>
        </div>
    )
};