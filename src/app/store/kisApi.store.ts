import { cookies } from 'next/headers';
import { create } from 'zustand'

interface KisAuthState {
    data : IKisAuth[],
    fetchKisAuth: () => Promise<void>,
    setKisAuth: (data: IKisAuth[]) => void,
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
        fetchKisAuth: async () => {
            const response = await fetch(`/api/kis/kisAuth`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            
            const data: { access_token: string } = await response.json(); 
    
            console.log("KIS authkey : ", cookies().get('kisAccessToken')); 

            get().kisAuth.setKisAuth(data);
            console.log('Kis Auth fetched',data)
        },
        setKisAuth: (data: IKrx[]) => set((state) => ({ ...state, data })),
    },

    kisSection:{
        data: [],
        fetchKisSection: async () => {
            const response = await fetch(`api/kis/KisSection`,{

            });
            if (!response.ok) {
                throw new Error('Failed to fetch news');
            }
            const data: IKrx[] = await response.json()
            get().kisSection.setKisSection(data);
            console.log('Kis Section fetched',data)
        },
        setKisSection: (data: IKrx[]) => set((state) => ({ ...state, data })),

    }

}))

export const useKisAuthFetch =() =>useKisStore((store)=>store.kisAuth.fetchKisAuth)
export const useKisSectionFetch =() =>useKisStore((store)=>store.kisSection.fetchKisSection)

export const useKisAuthStack =() =>useKisStore((store)=>store.kisAuth.data)
export const useKisSectionStack =() =>useKisStore((store)=>store.kisSection.data)

export const useKisState =() =>useKisStore.getState();
