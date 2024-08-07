
import { useQuery } from "@tanstack/react-query";
import { fetchKisSection } from "@/app/service/kis/kis.api";
import MarketBarChart from "../chart/marketChart";
import { Suspense } from "react";

export default function StockMarket({props}:{props:number}) {
// props = 1 코스닥, 2 = 코스피
    const fetchSection = async (): Promise<IKisSection> => {
        console.log("fetchSection: ", props)
        const response = await fetchKisSection(props)
        if ('status' in response) {
            throw new Error(`Error: ${response.status}`);
        }
        return response;
    }

    const { data } = useQuery<IKisSection>(
        {
            queryKey: ["kisSection", props],
            queryFn: fetchSection,
        }
    );

    return (
        <div className="w-full h-full flex justify-center content-center">
            <Suspense>
            {data ? <MarketBarChart props={data} /> : ''}
            </Suspense>
        </div >
    )

}