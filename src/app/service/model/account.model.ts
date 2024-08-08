interface IAccount {
    id: number,
    acno: string,
    receiveAcId? : number,
    acpw? : string,
    balance?: number,
    refundAcno?: string,
    bank?: string,
    briefs?: string
    acType?: string,
    tradeType?: string,
    paymentUid?: string,
    regDate?: string,
    modDate?: string,
}