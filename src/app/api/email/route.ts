'use server'

import { NextRequest, NextResponse } from 'next/server';

// export async function POST(req: NextRequest) {
//     try {
//         // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admins/email/send`)
//         const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/email/send`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 enpEmail: req,
//                 message: req,
//             })
//         })

//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }

//         const res: INews[] = await response.json();
//         // console.log("News list api data : ", data);

//         if (res.length === 0) {
//             return NextResponse.json({ error: "data NOT FOUND" }, { status: 404 });
//         }

//         return NextResponse.json(res);
//     } catch (error) {
//         console.error("News list api err : " + error);
//         return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
//     }
// }

export const sendMail = async(data:any) =>{
    try {
        // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admins/email/send`)
        console.log("sendMail : ")
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/email/send`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                // enpEmail: req,
                // message: req,
            })
        })

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const res = await response.json();
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