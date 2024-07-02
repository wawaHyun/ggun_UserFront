
export const WhiteBox =({content, style }:{content:any, style?:string })=> {
    return (
            <div className={`border shadow-lg rounded-lg overflaw-auto p-3 w-full h-full ${style}`}>
            {`${content}`}
            </div>
        )

}