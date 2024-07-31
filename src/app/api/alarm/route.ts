'use server'

import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
        // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admins/email/send`)
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/email/send`)
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

        // console.log("findExchangeByCodeAPI data : ", data);

        if (data.length === 0) {
            return NextResponse.json({ error: "data NOT FOUND" }, { status: 404 });
        }

        return NextResponse.json(data);
    } catch (error) {
        console.error("findExchangeByCodeAPI err : " + error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}