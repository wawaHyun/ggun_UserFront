'use client'
import CmaTerm from "@/app/common/terms/cmaTerm";
import { MoveButton } from "@/app/component/button/moveButton";
import { WhiteBox } from "@/app/component/style/whiteBox";
import { useState } from "react";

export default function AiExistFalse(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className="w-full h-full ">
            <div className="">
                <WhiteBox>ㅠㅠ! AI계좌를 만들지 않았습니다. 계좌를 만들어 주세요.</WhiteBox>
                <div><MoveButton text="CMA 계좌 개설하기" click={() => setIsOpen(!isOpen)}/></div>
                <div>
                    {isOpen ?
                    <div className="border border-l-4">
                        <div><CmaTerm/></div>
                        <div>꾼ggun CMA(Cash Management Account)서비스의 이용약관을 동의하여야만 CMA서비스 이용이 가능합니다.</div>
                        <div><input type="checkbox" name="actype" value="입금" className="w-5" /> 위 서비스 이용 약관을 읽고 동의합니다.</div>
                        <div><MoveButton text="CMA 계좌 개설" click={() => setIsOpen(!isOpen)}/></div>
                    </div>
                    : <div></div> }
                </div>
            </div>
        </div>
    );
};