import Image from "next/image"

export default function AdBox(){

    const adImgs:IAdImg[] =[
        {imgSrc : '/imgs/jusikAd1.png'},
        {imgSrc : '/imgs/jusikAd2.png'},
        {imgSrc : '/imgs/jusikAd3.png'},
    ]
    return(
        <div className="">
            {adImgs.map((v:IAdImg, i:number)=>
            <div key={i} className="flex">
                <Image src={v.imgSrc} alt={v.imgSrc} width={100} height={100}/>
            </div>
            )}
        </div>
    )
}