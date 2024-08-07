'use client'

import { KrxJisuDummy } from "@/app/common/dummy/krx.dummy";
import { fetchKrxJisu } from "@/app/service/krxJisu/krxJisu";
import { useKrxJisuFetch, useKrxJisuStack } from "@/app/store/krxJisu.store";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";

export default async function JisuBenner() {

    // const { data: krxJisu = [], isLoading, isError } = useQuery<IKrx[], Error>({
    //     queryKey: ['krxJisu'],
    //     queryFn: fetchKrxJisu(),
    // });

    //   const krxJisu = useQuery<IKrx[]>(['krxJisu'], fetchKrxJisu());

    // const fecthJisu = useKrxJisuFetch();
    // const currentJisu = useKrxJisuStack();

    // try {
    //     if(currentJisu.length == 0){
    //         fecthJisu();
    //     }
    //     console.log("exchange : ", currentJisu);
    // } catch (error) {
    //     console.error("Failed to fetch exchange rates:", error);
    // }

    const krxJisu = KrxJisuDummy

    return (
        <div className="bg-pebble-100">
            <div className="text-white text-sm space-x-8 flex h-[20px] whitespace-nowrap animate-slider">
                {krxJisu.map((v: IKrx, i: number) =>
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