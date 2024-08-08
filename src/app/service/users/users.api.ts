'use server'

import { cookies } from "next/headers";

export async function existUser(username: string): Promise<boolean | { status: number }> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/exists-username?username=${username}`)
        
        if (!response.ok) { throw new Error('API Network response was not ok'); }
        const data:boolean = await response.json();
        if (data == undefined || data == null) { return { status: 404 }; }
        console.log("existAdmin!!!" + JSON.stringify(data))

        return data
    } catch (error) {
        console.log("existUser err : " + error);
        return { status: 500 };
    }
}

export async function loginUser(admin: IUser): Promise<IAuthToken | { status: number }> {
    const Dadmin:IUser = {email:'jgs0318@gmail.com', password:'pO2(eO73)%@'}
    const token:IAuthToken = {accessToken:'1', refreshToken:'1'}
    try {
        const bodys = {
            'email' : Dadmin.email,
            'password' : Dadmin.password,
        };

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/admins/login`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bodys),
        })
       
        if (!response.ok) { throw new Error('API Network response was not ok'); }
        const data:IAuthToken = await response.json();
        if (data == undefined || data == null) { return { status: 404 }; }

        console.log("loginAdmin : " + JSON.stringify(data))

        cookies().set('accessToken', token.accessToken);
        cookies().set('id', token.refreshToken);

        return data
    } catch (error) {
        console.log("loginUser err : " + error);
        return { status: 500 };
    }
}


export async function refreshToken(): Promise<IAuthToken | { status: number }> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login?username=ggunAdmin0001&password=pO2(eO73)%@`)
       
        if (!response.ok) { throw new Error('API Network response was not ok'); }
        const data:IAuthToken = await response.json();
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

