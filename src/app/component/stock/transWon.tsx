import { WhiteBox } from "../box/baseBox";


export default function TransWon() {
    return (
        <div className="w-full h-full flex justify-center content-center">
            <div className="w-[80%] h-[70%] grid grid-cols-2  text-center gap-5">
            <div><WhiteBox content={<div className="py-3 space-y-2">
                <div className="text-blue-500">미국<hr /></div>
                <div className="text-blue-500 text-lg">살때 1,4000</div>
                <div className="text-blue-500 text-lg">팔때 1,380</div>
            </div>} /></div>
            <div><WhiteBox content={<div className="py-3 space-y-2">
                <div className="text-amber-500">중국<hr /></div>
                <div className="text-amber-500 text-lg">살때 190.5</div>
                <div className="text-amber-500 text-lg">팔때 170.5</div>
            </div>} /></div>
            <div><WhiteBox content={<div className="py-3 space-y-2">
                <div className="text-green-500">유럽<hr /></div>
                <div className="text-green-500 text-lg">살때 1474.5</div>
                <div className="text-green-500 text-lg">팔때 1325.5</div>
            </div>} /></div>
            <div><WhiteBox content={<div className="py-3 space-y-2">
                <div className="text-red-500">일본<hr /></div>
                <div className="text-red-500 text-lg">살때 866.7</div>
                <div className="text-red-500 text-lg">팔때 801.7</div>
            </div>} /></div>
            </div>
        </div>
    )

}