import LoginBox from "@/app/component/login/loginBox";


const Login = () => {
    return (
        <div className="flex justify-center content-center w-screen items-center h-screen ">
            <div className=" flex rounded-lg shadow-lg border min-w-[500px] min-h-[400px]">
                <div className="w-full p-8">
                    <p className="text-xl text-gray-600 text-center">로그인</p>
                    <div>
                        <LoginBox />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;