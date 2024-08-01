import { create } from 'zustand'

interface KrxJisuState {
    data : IKrx[],
    fetchKrxJisu: () => Promise<void>,
    setKrxJisu: (data: IKrx[]) => void,
}

const useKrxJisuStore = create<KrxJisuState>()((set,get) => ({
    data: [],
    fetchKrxJisu: async () => {
        const response = await fetch(`api/krxJisu`);
        if (!response.ok) {
            throw new Error('Failed to fetch news');
        }
        const data: IKrx[] = await response.json()
        get().setKrxJisu(data);
        console.log('KrxJisu fetched',data)
    },
    setKrxJisu: (data: IKrx[]) => set((state) => ({ ...state, data })),
}))

export const useKrxJisuFetch =() =>useKrxJisuStore((store)=>store.fetchKrxJisu)
export const useKrxJisuStack =() =>useKrxJisuStore((store)=>store.data)
export const useKrxJisuState =() =>useKrxJisuStore.getState();
