'use server'

import { cookies } from 'next/headers'

export const kisAuthkey = async () => {
    try {
        const response = await fetch(`/api/kis/kisAuth`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({})
        });

        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        
        const data: { access_token: string } = await response.json(); 
        cookies().set('kisAccessToken', data.access_token)
        console.log("KIS authkey : ", cookies().get('kisAccessToken')); 

    } catch (error) {
        console.log("KIS authkey err: ", error);
        return null; 
    }
}
