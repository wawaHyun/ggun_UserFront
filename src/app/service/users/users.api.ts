'use server'

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

export async function loginUser(user: IUser): Promise<boolean | { status: number }> {
    console.log("user : ",user)
    const Dadmin: IUser = { email: 'jgs0318@gmail.com', password: 'pO2(eO73)%@' }
    const token: IAuthToken = { accessToken: '1sdfwtehhhefqada!@$!#%43444', refreshToken: '1sdfwtehhhefqada!@$!#%43444' }
    try {
        const bodys = {
            'email': Dadmin.email,
            'password': Dadmin.password,
        };

        // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/admins/login`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         // 'authorization': 'Bearer 38334a76c71a7b868b2618371a83665b8bae201f940e9a7791de668efb2a83b4' ,
        //     },
        //     body: JSON.stringify(bodys),
        // })

        // if (!response.ok) { throw new Error('API Network response was not ok'); }
        // const data: boolean = await response.json();
        // if (data == undefined || data == null) { return { status: 404 }; }

        // console.log("loginAdmin : " + JSON.stringify(data))

        if(token.accessToken && token.refreshToken){
            cookies().set('accessToken', token.accessToken);
            cookies().set('refreshToken', token.refreshToken);
            // cookies().set('id', token.refreshToken);
            console.log("toekens : {},{}",cookies().get('accessToken'),cookies().get('refreshToken'))
        }

        // return data
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

