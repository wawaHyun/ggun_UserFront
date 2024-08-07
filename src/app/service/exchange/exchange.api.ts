'use server'

import Today from "@/app/common/date/today";

export async function fetchExchange() : Promise<IExchange[] | { status: number }> {
    const code = ['USD', 'CNH', 'EUR', 'JPY(100)'];
    const data: IExchange[] = [];
    const url = `${process.env.EXCHANGE_API_URL}?authkey=${process.env.EXCHANGE_API_KEY}&searchdate=${Today()}&data=AP01`;

    console.log("findExchangeByCodeAPI URL!!!", url);
    
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const res: IExchange[] = await response.json();
        
        res.forEach((v: IExchange) => {
            if (code.includes(v.cur_unit)) {
                data.push(v);
            }
        });

        console.log("findExchangeByCodeAPI data : ", data);

        if (data.length === 0) {
            return { status: 404 };
        }

        return data;
    } catch (error) {
        console.error("findExchangeByCodeAPI err : " + error);
        return { status: 500 };
    }
}