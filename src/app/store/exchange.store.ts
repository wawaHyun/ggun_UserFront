import { create } from 'zustand'
import { fetchExchange } from '../fetch/exchange/exchange';

interface ExchangeState {
    data: IExchange[],
    fetchExchange: () => Promise<void>,
    setExchange: (data: IExchange[]) => void,
}

const useExchangeStore = create<ExchangeState>()((set, get) => ({
    data: [],
    fetchExchange: async () => {
        const response:IExchange[] = await fetchExchange();
        if (!response) {
            throw new Error('Failed to fetch news');
        }

        get().setExchange(response);
        console.log('Exchange fetched',response)
    },
    setExchange: (data: IExchange[]) => set((state) => ({ ...state, data })),
}))

export const useExchangeFetch = () => useExchangeStore((store) => store.fetchExchange)
export const useExchangeStack = () => useExchangeStore((store) => store.data)
export const useExchangeState = () => useExchangeStore.getState();
