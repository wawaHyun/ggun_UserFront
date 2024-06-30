

export const MoveButton = ({ text, click, color,select }: IButton) => {
    return (
        <button key={1}
        onClick={click}
        type="button"
        className={`text-white bg-pebble-200 hover:bg-pebble-300 focus:outline-none focus:ring-4 font-medium rounded-full text-sm text-center w-full h-full ${color} ${ select ? 'bg-pebble-400' : ''}`}>
               {text}
        </button>
    )
}
