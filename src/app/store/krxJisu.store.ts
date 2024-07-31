import { create } from 'zustand'

interface KrxJisuState {
    data : IKrx[],
    update :  (data:IKrx[]) => void,
}

const useKrxJisuStore = create<KrxJisuState>()((set) => ({
    data: [],
    // update : ()=> set( (state) => ({ data:{ ...state.data, ...state } }) ),
    update: (data: IKrx[]) => set({ data }),
}))

export const useKrxJisuAction =() =>useKrxJisuStore((store)=>store.update)
export const useKrxJisuStack =() =>useKrxJisuStore((store)=>store.data)
export const useKrxJisuState =() =>useKrxJisuStore.getState();
