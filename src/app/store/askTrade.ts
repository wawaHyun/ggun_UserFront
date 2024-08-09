import { get } from 'http'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface askTradeState {
    data: IAskTrade,
    action : {
        update: (data: IAskTrade) => void,
        pdQtyIncrease: () => void,
        pdQtyDecrease: () => void,
    }
}

// export const useBearStore = create(
//     persist(
//       (set, get) => ({
//         bears: 0,
//         addABear: () => set({ bears: get().bears + 1 }),
//       }),
//       {
//         name: 'food-storage', // name of the item in the storage (must be unique)
//         storage: createJSONStorage(() => sessionStorage), // (optional)이기 때문에 해당 줄을 적지 않으면 'localStorage'가 기본 저장소로 사용된다.
//       },
//     ),
//   )

    const useaskTradeStore = create<askTradeState>()((set, get) => ({
    data: {
        pdno: '',
        prdtName: '',
        pdQty: 0,
        avgPrvs: 0,
        tradeType: '',
        account: 0,
        acpw: 0,
        sllBuyDvsnCd: 1,
        ordDvsnCd: 2,
    },
    action : {
        update: (data: IAskTrade) => {
            set({ data })
            console.log("set : ", data)
        },
        pdQtyIncrease: () => {
            const currentData = get().data;
            set({ data: { ...currentData, pdQty: currentData.pdQty + 1 } });
            console.log("pdQtyIncrease : ", currentData)
        },
        pdQtyDecrease: () => {
            const currentData = get().data;
            set({ data: { ...currentData, pdQty: currentData.pdQty - 1 } });
            console.log("pdQtyDecrease : ", currentData)
        },
    }
}))

export const useaskTradeAction = () => useaskTradeStore((store) => store.action)
export const useaskTradeStack = () => useaskTradeStore((store) => store.data)
export const useaskTradeState = () => useaskTradeStore.getState();
