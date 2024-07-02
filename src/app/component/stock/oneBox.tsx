
export const OneBox = ({ title, data, color }: { title:string, data:string, color:string }) => {
    return (
        <div className={`border-b-2 overflaw-auto px-2 w-full h-full flex`}>
            <div className="text-slate-400 w-1/3 text-sm ">{title}</div>
            <div className={`${color} text-right w-2/3`}>{data}</div>
        </div>
    )

}