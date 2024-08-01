'use client'

import { KrxJisuDummy } from "@/app/common/dummy/krx.dummy";
import { useKrxJisuFetch, useKrxJisuStack } from "@/app/store/krxJisu.store";

export default async function JisuBenner() {

    const fecthJisu = useKrxJisuFetch();
    const currentJisu = useKrxJisuStack();

    // const fetchData = useCallback(async () => {
    //     try {
    //         const res = await fetch('/api/krxJisu');
    //         const data: IKrx[] = await res.json();
    //         updateKrxData(data);
    //         // console.log("JisuBenner : ", currentJisuData);
    //     } catch (error) {
    //         console.error("Failed to fetch exchange rates:", error);
    //     }
    // }, [updateKrxData, currentJisuData]);

    // useEffect(() => {
    //     fetchData();
    // }, []);

    try {
        if(currentJisu.length == 0){
            fecthJisu();
        }
        console.log("exchange : ", currentJisu);
    } catch (error) {
        console.error("Failed to fetch exchange rates:", error);
    }

    return (
        <div className="bg-pebble-100">
            <div className="text-white text-sm space-x-8 flex h-[20px] whitespace-nowrap animate-slider">
                {currentJisu.map((v: IKrx, i: number) =>
                    <div key={i} className="flex gap-2">
                        <div className="" key={i}>{v.IDX_NM}</div>
                        <div className="text-pebble-400">{v.CLSPRC_IDX}</div>
                        <div className={`${v.FLUC_RT.startsWith('-') ? 'text-sky-300' : 'text-rose-300'}`}>{v.FLUC_RT}</div>
                    </div>
                )}
            </div>
        </div>

    )
}