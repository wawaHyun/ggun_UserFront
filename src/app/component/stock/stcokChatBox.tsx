import { useState } from "react";

export const StockChatBox = ({ id,writer, title, content, date }: any) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div key={id} className="w-full h-full">
            <button className="flex w-full h-[50px] grid grid-cols-2 px-4 items-center" onClick={() => setIsOpen(!isOpen)}>
                <div className="text-lg text-left">{title}</div>
                <div className="text-slate-400 text-right">{writer}</div>
            </button>
                <hr />

            {isOpen == true ?
                <div className="border shadow-lg rounded-b-lg overflaw-auto p-2 w-full h-[100px] bg-slate-200 ">
                    <div className="text-slate-400 text-right">{date}</div>
                    <div className="h-[50%]">{content}</div>
                </div>
           :<div></div> }
        </div>
    )

}