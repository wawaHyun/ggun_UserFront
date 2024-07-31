import { IAccount } from "@/app/api/model/account.model";
import { LocalNumberOptions } from "@/app/common/config/localeString";
import { tradeDummy } from "@/app/common/dummy/account.dummy";


export default function MyAccInfo() {

    const myAccInfo:IAccount = tradeDummy[0];

    return (
        <div className="h-full w-full bg-pebble-400 p-8 flex justify-center">
            <div className="w-[50%] text-center space-y-3 grid grid-cols-2">
                <div className="h-[30%] text-4xl items-center col-span-2">총자산</div>
                <div className="h-[20%] item-center text-6xl col-span-2">{myAccInfo.balance?.toLocaleString("ko", LocalNumberOptions)}원</div>
                <div className={`${myAccInfo.balance == undefined || myAccInfo.balance < 0 ? 'text-blue-400' : 'text-red-400'} text-2xl`}>{myAccInfo.balance?.toLocaleString("ko", LocalNumberOptions)}</div>
                <div className={`${myAccInfo.balance == undefined || myAccInfo.balance < 0 ? 'text-blue-400' : 'text-red-400'} text-2xl`}>{myAccInfo.balance}%</div>

                <div className="h-[20%] item-center text-6xl border-pebble-500 border-b-4 border-double">{myAccInfo.balance?.toLocaleString("ko", LocalNumberOptions)}원</div>

                <div className="h-[30%] text-slate-500">
                    <div>예수금</div>
                    <div>{myAccInfo.balance?.toLocaleString("ko", LocalNumberOptions)}원</div>

                    <div>출금가능금액</div>
                    <div>{myAccInfo.balance?.toLocaleString("ko", LocalNumberOptions)}원</div>
                </div>

            </div>
        </div>
    )
}
