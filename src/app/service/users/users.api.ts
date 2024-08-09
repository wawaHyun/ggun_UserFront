'use server'

import { extractCookie } from "@/app/component/util/cookies";
import { cookies } from "next/headers";

export async function existUser(username: string): Promise<boolean | { status: number }> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/exists-username?username=${username}`)

        if (!response.ok) { throw new Error('API Network response was not ok'); }
        const data: boolean = await response.json();
        if (data == undefined || data == null) { return { status: 404 }; }
        console.log("existAdmin!!!" + JSON.stringify(data))

        return data
    } catch (error) {
        console.log("existUser err : " + error);
        return { status: 500 };
    }
}


export async function loginUser(user: IUser): Promise<any | { status: number }> {
    // const token: IAuthToken = { accessToken: '1sdfwtehhhefqada!@$!#%43444', refreshToken: '1sdfwtehhhefqada!@$!#%43444' }
    try {
        const bodys = {
            username: user.username,
            password: user.password,
        };

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login/local`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bodys),
        })

        const accessToken = response.headers.getSetCookie()[0];
        const refreshToken = response.headers.getSetCookie()[1];

        if (!response.ok) { throw new Error('API Network response was not ok'); }

        if (response.status === 200) {
            cookies().set({
                name: 'accessToken',
                value: extractCookie(accessToken, 'accessToken'),
                path: '/',
                maxAge: Number(extractCookie(accessToken, 'Max-Age')),
                expires: new Date(extractCookie(accessToken, 'Expires')),
                sameSite: 'lax',
                httpOnly: true,
            })
            cookies().set({
                name: 'refreshToken',
                value: extractCookie(refreshToken, 'refreshToken'),
                maxAge: Number(extractCookie(refreshToken, 'Max-Age')),
                expires: new Date(extractCookie(refreshToken, 'Expires')),
                path: '/',
                sameSite: 'lax',
                httpOnly: true
            });
        }

        const data: any = await response.json();
        if (data == undefined || data == null) { return { status: 404 }; }

        console.log("loginAdmin : " + JSON.stringify(data))
        console.log("accessToken : ", cookies().get('accessToken'))
        console.log("refreshToken : ", cookies().get('refreshToken'))

        return true
    } catch (error) {
        console.log("loginUser err : " + error);
        return { status: 500 };
    }
}


export async function refreshToken(): Promise<IAuthToken | { status: number }> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login?username=ggunAdmin0001&password=pO2(eO73)%@`)

        if (!response.ok) { throw new Error('API Network response was not ok'); }
        const data: IAuthToken = await response.json();
        if (data == undefined || data == null) { return { status: 404 }; }

        console.log("loginAdmin : " + JSON.stringify(data))
        // cookies().set('accessToken', data.access_token);
        // cookies().set('refreshToken', data.refreshToken);
        // cookies().set('id', data.id);
        return data
    } catch (error) {
        console.log("refreshToken err : " + error);
        return { status: 500 };
    }
}

