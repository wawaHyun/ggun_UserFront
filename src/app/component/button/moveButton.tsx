

export const MoveButton = ({ text, click, style,select }: IButton) => {
    return (
        <button key={1}
        onClick={click}
        type="button"
        className={`min-w-[100px] min-h-[30px] text-white bg-pebble-200 hover:bg-pebble-300 focus:outline-none focus:ring-4 font-medium rounded-full text-sm text-center ${style} ${ select ? 'bg-pebble-400' : ''}`}>
               {text}
        </button>
    )
}
