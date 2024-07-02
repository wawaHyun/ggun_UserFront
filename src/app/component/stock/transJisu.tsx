import BarChart from "../chart/barChart";
import { WhiteBox } from "../box/baseBox";

export default function TransJisu() {
    return (
        <div className="w-full h-full flex justify-center content-center">
            <div className="w-[80%] h-[60%] grid grid-cols-2  text-center gap-2">
            <div><WhiteBox content={<div className="py-3 ">
                <div className="text-blue-500">구리<hr /></div>
                <div className=""><BarChart/></div>
            </div>} style="" /></div>
            <div><WhiteBox content={<div className="">
                <div className="text-amber-500">금<hr /></div>
                <div className=""><BarChart/></div>
            </div>} style="" /></div>
            <div><WhiteBox content={<div className="">
                <div className="text-green-500">희토류<hr /></div>
                <div className=""><BarChart/></div>
            </div>} style="" /></div>
            <div><WhiteBox content={<div className="">
                <div className="text-red-500">반도체<hr /></div>
                <div className=""><BarChart/></div>
            </div>} style="" /></div>
            </div>
        </div>
    )

}