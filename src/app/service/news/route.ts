'use server'

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admins/news/list`)
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news/list`)

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const res: INews[] = await response.json();
        // console.log("News list api data : ", data);

        if (res.length === 0) {
            return NextResponse.json({ error: "data NOT FOUND" }, { status: 404 });
        }

        return NextResponse.json(res);
    } catch (error) {
        console.error("News list api err : " + error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}