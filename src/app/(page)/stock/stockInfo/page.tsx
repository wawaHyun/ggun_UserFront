
import { OneBox } from "@/app/component/stock/oneBox";


function StockInfo() {

    const data =[
        {id:1, title:'전일', data:'16,000', color:''},
        {id:2, title:'시가', data:'16,170', color:'text-red-400'},
        {id:3, title:'고가', data:'16,680', color:'text-red-400'},
        {id:4, title:'저가', data:'15,820', color:'text-blue-400'},
        {id:5, title:'거래량', data:'11,440,528', color:'t'},
        {id:6, title:'대금', data:'189,787백만', color:''},
        {id:7, title:'시총', data:'3조 1,360억', color:''},
        {id:8, title:'외인소진율', data:'6.93%', color:''},
        {id:9, title:'PER', data:'28.61', color:''},
        {id:10, title:'EPS', data:'588원', color:''},
        {id:11, title:'추정PER', data:'', color:''},
        {id:12, title:'추정EPS', data:'', color:''},
        {id:13, title:'PBR', data:'2.19', color:''},
        {id:13, title:'BPS', data:'7,669원', color:''},
        {id:13, title:'배당수익률', data:'', color:''},
        {id:13, title:'주당배당금', data:'', color:''},
    ]

    return (
        <div className="w-full h-full">
            <div className="w-full flex justify-center">
                <div className="flex-col w-full grid grid-cols-4 gap-3">
                    {data.map((v:any,i:number)=>
                    <div key={v.id} className="h-[40px]">
                        <OneBox title={v.title} data={v.data} color={v.color}/>
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
};
export default StockInfo;