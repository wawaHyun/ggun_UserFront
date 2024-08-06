
import BarChart from "../chart/barChart";
import { WhiteBox } from "../style/whiteBox";
import { useQuery } from "@tanstack/react-query";
import { fetchKisAuth, fetchKisSection } from "@/app/service/kis/kis.api";
import { cookies } from "next/headers";

export default async function TransJisu() {


    // const fecthAccesstoken = useKisSetAuth();
    // const kisAccesstoken = useKisAuthStack();
    // const fecthKisSection = useKisSectionFetch();
    // const kisSection = useKisSectionStack();

    // const accessToken = kisAuthkey();

    // try {
    //     // if(kisAccesstoken == null){
    //     //     fecthAccesstoken(accessToken);
    //     // }

    //     // console.log("KIS authkey : ", cookies().get('kisAccessToken')); 

    //     if(kisSection.length == 0){
    //         console.log("kisAccesstoken1 : ", accessToken);
    //         fecthKisSection();
    //     }
    //     console.log("kisAccesstoken2 : ", accessToken);
    //     // console.log("kisSection : ", kisSection);
    // } catch (error) {
    //     console.error("Failed to fetch exchange rates:", error);
    // }

    //  const jisuAccesstoken = ()=> {
    //         const token = useQuery({
    //             queryKey: ["kisJisu"],
    //             queryFn: async () => await fetchKisAuth(),
    //         })
    //         console.log("1: ", token)
    //         // console.log("2: ", token.access_token)
    //         // cookies().set('kisJisuAcctoken',token.access_token)
    //     }

    // const cookies = useCookies()
    // const kisToken = cookies().get('kisToken')

    const fetchAuth = async () => {
        await fetchKisAuth()
        // console.log("kisToken: ", kisToken)
    }

    const fetchSection = async () => {
        const response = await fetchKisSection()
        console.log("fetchSection: ", response)
        return response;
    }

    const { data } = useQuery(
        {
            queryKey: ["kisSection"],
            queryFn: fetchSection,
        }
    );

    try {
        // if (kisToken == null) {
        //     fetchAuth
        // }
        // if(kisToken){
        // }
        // console.log("fetchSection result : ", data)
        
    } catch (error) {
        console.error("Failed to fetch exchange rates:", error);
    }



    // // 데이터 패칭 함수 
    // const getUserData(userId) = () => {
    //     return fetch(`/api/user/${userId}`).then((response) => response.json());
    //   }

    //   const UserProfile = ({ userId }) => {
    //       // useQuery 를 사용하여 데이터를 가져옵니다. ['user', userId] 는 쿼리 키를 의미합니다.
    //     const { data, isError, error, isLoading } = useQuery(['user', userId], () => fetchUserData(userId));


    return (
        <div className="w-full h-full flex justify-center content-center">
            <div className="w-[80%] h-[60%] grid grid-cols-2  text-center gap-2">
                <WhiteBox>
                    <div className="">
                        <div className="text-amber-500">구리<hr /></div>
                        <div className=""><BarChart /></div>
                    </div>
                </WhiteBox>
                <WhiteBox>
                    <div className="">
                        <div className="text-amber-500">금<hr /></div>
                        <div className=""><BarChart /></div>
                    </div>
                </WhiteBox>
                <WhiteBox>
                    <div className="">
                        <div className="text-amber-500">희토류<hr /></div>
                        <div className=""><BarChart /></div>
                    </div>
                </WhiteBox>
                <WhiteBox>
                    <div className="">
                        <div className="text-amber-500">반도체<hr /></div>
                        <div className=""><BarChart /></div>
                    </div>
                </WhiteBox>
            </div>
        </div >
    )

}