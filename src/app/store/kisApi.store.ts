"use client"

import { create } from 'zustand'

interface KisAuthState {
    data : IKisAuth[],
    // fetchKisAuth: () => Promise<void>,
    setKisAuth: (data: string) => void,
}

interface KisSectionState {
    data : IKisSection[],
    fetchKisSection: () => Promise<void>,
    setKisSection: (data: IKisSection[]) => void,
}

interface KisState {
    kisAuth : KisAuthState,
    kisSection : KisSectionState,
}

const useKisStore = create<KisState>()((set,get) => ({
    kisAuth:{
        data: [],
        // fetchKisAuth: (store) => sto
    
        //     // console.log("KIS authkey : ", cookies().get('kisAccessToken')); 

        //     get().kisAuth.setKisAuth(data.access_token);
        //     console.log('Kis Auth fetched',data.access_token)
        // },
        setKisAuth: (data: string) => set((state) => ({ ...state, data })),
    },

    kisSection:{
        data: [],
        fetchKisSection: async () => {
            console.log("KIS authkey : 진입완 ");
            console.log("KIS authkey : ", get().kisAuth.data);
            const response = await fetch(`api/kis/kisSection`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${get().kisAuth.data}`
                },
                body: JSON.stringify({})
            });

            if (!response.ok) {
                throw new Error('Failed to fetch news');
            }

            const data: IKisSection[] = await response.json()
            get().kisSection.setKisSection(data);
            console.log('Kis Section fetched',data)
        },
        setKisSection: (data: IKisSection[]) => set((state) => ({ ...state, data })),

    }

}))

export const useKisSetAuth =() =>useKisStore((store)=>store.kisAuth.setKisAuth)
export const useKisSectionFetch =() =>useKisStore((store)=>store.kisSection.fetchKisSection)

export const useKisAuthStack =() =>useKisStore((store)=>store.kisAuth.data)
export const useKisSectionStack =() =>useKisStore((store)=>store.kisSection.data)

export const useKisState =() =>useKisStore.getState();
