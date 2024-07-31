'use server'

export async function GET (){
    return("뭘봐")
}

// export async function allAccount(): Promise<IAccount[] | undefined> {
//     const id = 1;
//     try {
//         const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/account/list?id=${id}`)
//         const data: IAccount[] = await response.json();
//         console.log("allAccount!!!"+ JSON.stringify(data))
//         return data
//     } catch (error) {
//         console.log("allAccount err : " + error)
//     }
// }

// export async function findAccountById(): Promise<IAccount | undefined> {
//     const id = 1;
//     try {
//         const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/account/detail?id=${id}`)
//         const data: IAccount = await response.json();
//         console.log("findAccountById!!!"+ JSON.stringify(data))
//         return data
//     } catch (error) {
//         console.log("allAccount err : " + error)
//     }
// }

// export async function accountHistories(): Promise<IAccount[] | undefined> {
//     const id = 1;
//     try {
//         const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/account//acc-histories/list?id=${id}`)
//         const data: IAccount[] = await response.json();
//         console.log("findAccountById!!!"+ JSON.stringify(data))
//         return data
//     } catch (error) {
//         console.log("allAccount err : " + error)
//     }
// }

// export async function deposit(accinfo: IAccount): Promise<IAccount | undefined>  {
//     // console.log("deposit : " + JSON.stringify(article))
//     // const id = 1;
//     const { id, balance, acType, bank} = accinfo || {}
//     try {
//         const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/account/deposit`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 id: 1,
//                 balance: balance,
//                 acType: "입금",
//                 bank: bank,
//             })
//         })
//         const data: IAccount = await response.json();
//         console.log("deposit : " + JSON.stringify(data))
//         return data
//     } catch (error) {
//         console.log("deposit EERR!!!" + error)
//     }
// }


// export async function withdraw(accinfo: IAccount): Promise<IAccount | undefined>  {
//     // console.log("deposit : " + JSON.stringify(article))
//     // const id = 1;
//     const { id, balance, acType, bank} = accinfo || {}
//     try {
//         const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/account/withdraw`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 id: 1,
//                 balance: balance,
//                 acType: "출금",
//                 bank: bank,
//             })
//         })
//         const data: IAccount = await response.json();
//         console.log("withdraw : " + JSON.stringify(data))
//         return data
//     } catch (error) {
//         console.log("withdraw EERR!!!" + error)
//     }
// }
