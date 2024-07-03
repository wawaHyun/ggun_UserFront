import { allAccount } from "@/app/api/account/route";
import { accDummy, tradeDummy } from "@/app/common/dummy/account.dummy";
import Image from "next/image";

export default async function AccountList() {

  // const accList = await allAccount();
  const accList = accDummy;

  return (
    <div className="w-full h-full  flex justify-center">
      <div className="w-[85%] border">
        <div className="w-full h-[500px] relative "> <Image src={"/imgs/stockBenner.jpg"} alt={"stockBenner"} fill /></div>
        <div className="mt-[40px]">
          <h1 className="border-b-black text-[30px] mb-5">은행 계좌 목록 <hr /></h1>
          {tradeDummy.map((v: any, i: number) => (
            <div key={v.id}>
              <div className="grid grid-flow-col border grid-cols-2 p-2 gap-2 text-center text-black mb-5 hover:shadow-lg hover:border rounded-lg">
                <Image unoptimized src='/imgs/chart.png' height={150} width={350} alt={v.title} className="rounded-r-lg" />
                <div>{ }</div>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  )
};