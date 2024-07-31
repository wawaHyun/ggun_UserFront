
import { WhiteLink } from "@/app/component/link/whiteLink";
import CertificateLogin from "@/app/component/login/certificateLogin";
import IdLoginBox from "@/app/component/login/loginBox";
import SendMail from "@/app/component/login/sendMail";


const Login = () => {
    return (
        <div className="flex justify-center w-screen items-center h-full">
            <div className="rounded-lg shadow-lg border min-w-[500px] min-h-[400px] p-8 mb-10">
                <div className="flex space-x-[5%]">
                    <IdLoginBox />
                    <CertificateLogin />
                </div>
                <div className="flex justify-center w-full h-[50px]">
                    <div className="w-[20%] content-center">
                        <SendMail />
                        <WhiteLink click="http://localhost:3001/" >ADMIN PAGE</WhiteLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;