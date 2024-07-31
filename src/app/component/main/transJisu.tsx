
import BarChart from "../chart/barChart";
import { WhiteBox } from "../style/whiteBox";

export default function TransJisu() {


    return (
        <div className="w-full h-full flex justify-center content-center">
            <div className="w-[80%] h-[60%] grid grid-cols-2  text-center gap-2">
               <WhiteBox>
                    <div className="">
                        <div className="text-amber-500">구리<hr /></div>
                        <div className=""><BarChart /></div>
                    </div>
                </WhiteBox>
                <WhiteBox>
                    <div className="">
                        <div className="text-amber-500">금<hr /></div>
                        <div className=""><BarChart /></div>
                    </div>
                </WhiteBox>
                <WhiteBox>
                    <div className="">
                        <div className="text-amber-500">희토류<hr /></div>
                        <div className=""><BarChart /></div>
                    </div>
                </WhiteBox>
                <WhiteBox>
                    <div className="">
                        <div className="text-amber-500">반도체<hr /></div>
                        <div className=""><BarChart /></div>
                    </div>
                </WhiteBox>
            </div>
        </div >
    )

}