import Image from "next/image"
import Link from "next/link"

export default function OAuth () {

    return(
        <div className="relative top-0 left-[25%] grid grid-cols-3 w-[50%] h-full">
            <div className="relative top-0 w-[50px] h-[50px]">
            <Link href={`${alert("구글은 어카나요")}`}><a><Image src={'/imgs/google.png'} alt={"google"} fill /></a></Link>
            </div>
            <div className="relative top-0 w-[50px] h-[50px]">
            <Link href={`http://localhost:8080/oauth2/tuhorization/naver`}><a><Image src={'/imgs/naver.png'} alt={"google"} fill /></a></Link>
            </div>
            <div className="relative top-0 w-[50px] h-[50px]">
            <Link href={`http://localhost:8080/oauth2/tuhorization/kakao`}><a><Image src={'/imgs/kakao.png'} alt={"google"} fill /></a></Link>
            </div>
        </div>
    )
}