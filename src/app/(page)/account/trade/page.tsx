import { WhiteBox } from "@/app/component/box/baseBox";

export default async function AccountTrade(){

    return(
<div className="w-full h-full flex justify-center content-center">
<div className="w-[80%] h-auto flex-col">
    <WhiteBox content={
        <div>
            <span>입금 : </span>
            <input type="text" />
            </div>
    }/>
</div>
</div>
    )
};