import { IAccount } from "@/app/api/model/account.model"

export const accDummy:IAccount[] = [
    { id: 1, acno: "111-111-555555" },
    { id: 2, acno: "222-222-555555" },
    { id: 3, acno: "333-333-555555" },
]

export const tradeDummy:IAccount[] = [
    { id: 1, modDate: "24-6-1", name: '삼성전자', acType : "입금", balance: 3000 },
    { id: 1, modDate: "24-6-4", name: 'LG디스플레이', acType : "출금", balance: 5000 },
    { id: 1, modDate: "24-6-5", name: 'SK하이닉스', acType : "입금", balance: 8000 },
    { id: 1, modDate: "24-6-6", name: '삼성전자', acType : "출금", balance: 6000 },
]
