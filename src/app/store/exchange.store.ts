import { create } from 'zustand'

interface ExchangeState {
    data: IExchange[],
    fetchExchange: () => Promise<void>,
    setExchange: (data: IExchange[]) => void,
}

const useExchangeStore = create<ExchangeState>()((set, get) => ({
    data: [],
    fetchExchange: async () => {
        const response = await fetch(`api/exchange`);
        if (!response.ok) {
            throw new Error('Failed to fetch news');
        }
        const data: IExchange[] = await response.json()
        get().setExchange(data);
        console.log('Exchange fetched',data)
    },
    setExchange: (data: IExchange[]) => set((state) => ({ ...state, data })),
}))

export const useExchangeFetch = () => useExchangeStore((store) => store.fetchExchange)
export const useExchangeStack = () => useExchangeStore((store) => store.data)
export const useExchangeState = () => useExchangeStore.getState();
