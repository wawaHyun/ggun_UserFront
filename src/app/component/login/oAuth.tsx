import Image from "next/image"

export default function OAuth () {

    return(
        <div className="relative top-0 left-[25%] grid grid-cols-3 w-[50%] h-full">
            <div className="relative top-0 w-[50px] h-[50px]">
            <Image src={'/imgs/google.png'} alt={"google"} fill />
            </div>
            <div className="relative top-0 w-[50px] h-[50px]">
            <Image src={'/imgs/naver.png'} alt={"naver"} fill/>
            </div>
            <div className="relative top-0 w-[50px] h-[50px]">
            <Image src={'/imgs/kakao.png'} alt={"kakao"} fill/>
            </div>
        </div>
    )
}