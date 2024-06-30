export function TabButton ( {text, click, color,select }: IButton){
    return(
        <button className={`border rounded-t-lg border-b-0 forcus:text-pebble-500 ${color} ${ select ? 'bg-slate-100' : ''}`} onClick={click}>{text}</button>
    )
}

export function BottomLlinButton ( {text, click, color, select }: IButton){
    return(
        <button className={`w-full h-full border-b-[2px] border-pebble-300 border-r-0 rounded-t-lg ${color} ${ select ? 'bg-pebble-400' : ''}`} onClick={click}>{text}</button>
    )
}