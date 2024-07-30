"use client"

import { IUser } from "@/app/api/model/user.model";
import { existUser, loginUser } from "@/app/api/users/route";
import { useRef, useState } from "react";
import { MoveButton } from "../button/moveButton";
import OAuth from "./oAuth";
import { useRouter } from "next/navigation";

export default function IdLoginBox() {

    const router = useRouter();

    const [isWrongId, setIsWrongId] = useState('');
    const [isWrongPw, setIsWrongPw] = useState('');

    const [len, setLen] = useState(false);
    const [msg, setMsg] = useState('');

    const ref = useRef<HTMLInputElement>(null)

    const [admininfo, setadmininfo] = useState({ username: '' } as IUser)

    const handleAdminname = (e: any) => {
        const ID_CHECK = /^[a-zA-Z][a-zA-Z0-9]{5,11}$/g;
        ID_CHECK.test(admininfo.username + "") ? setIsWrongId('false') : setIsWrongId('true');
        setadmininfo({
            ...admininfo,
            username: e.target.value
        })
        // console.log('username : ' + JSON.stringify(admininfo))
        setLen(false)
    }


    const handlePassword = (e: any) => {
        const PW_CHECK = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{6,15}$/g;
        PW_CHECK.test(admininfo.password + "") ? setIsWrongPw('false') : setIsWrongPw('true');
        setadmininfo({
            ...admininfo,
            password: e.target.value
        })
    }

    const forgetPw = () => {
        console.log("forgetPw")
        alert('권한 담당자에게 연락 부탁드립니다.\n' +
            '담당자 : 인사팀 김현주\n' +
            'Tel : 2046')
    }

    const exist = async () => await existUser(admininfo.username)
    const login = async () => await loginUser(admininfo)

    const handleSubmit = () => {
        console.log('login page 입력받은 내용 ' + JSON.stringify(admininfo))
        setLen(true)
        router.push(`/afterMain`);
        // exist()
        //     .then((resp: any) => {
        //         console.log('login page : ' + JSON.stringify(resp))
        //         if (resp.payload == true) {
        //             setMsg("* 있는 아이디입니다.")
                    // login()
                    //     .then((resp: any) => {
                    //         setCookie({}, 'message', resp.payload.message, { httpOnly: false, path: '/' })
                    //         setCookie({}, 'accessToken', resp.payload.accessToken, { httpOnly: false, path: '/' })
                    //         console.log("서버에서 넘어온 message " + parseCookies().message)
                    //         console.log("서버에서 넘어온 token " + parseCookies().accessToken)
                    //         console.log("token decoding 내용 " + jwtDecode<any>(parseCookies().accessToken).username)
                    //         router.push(`${PG.REPORT}/dashboard`)
                    //         router.refresh()
                    //     })
                    //     .catch((err: any) => {
                    //         console.log("fetchLoginAdmin error : " + JSON.stringify(err))
                    //         alert("Wrong password. 시도하세요")
                    //     })
            //     } else {
            //         console.log("fetchExistAdmin page false : " + JSON.stringify(resp))
            //         setMsg('* 회원가입을 진행해주세요.')
            //     }
            // })
            // .catch((err: any) => {
            //     console.log("fetchExistAdmin error : " + err)
            // })

        if (ref.current) {
            ref.current.value = "";
        }
    }


    return (

        <div className="w-full h-full">
            <div className="">
                <div className="pb-3">
                    <div className="bold text-lg text-center">ID 로그인</div>
                    <div className="text-slate-500 text-center">주문/뱅킹/서비스 신청 등 모든 거래가 가능합니다.</div>
                </div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    ID : ggunAdmin0001
                </label>
                <input type="text" name="username" onChange={handleAdminname} required />

                {len === false ?
                    admininfo.username?.length === 0 || admininfo.username === undefined ? <pre></pre> :
                        (isWrongId === 'true' ?
                            (<pre><h6 className='text-red-500 text-sm'>* Wrong username form.</h6></pre>) :
                            (<pre><h6 className='text-green-500 text-sm'>* good username form.</h6></pre>)
                        )
                    : <pre><h6 className='text-red-500 text-sm'>{msg}</h6></pre>}

            </div>
            <div className="mt-4 flex flex-col justify-between">
                <div className="flex justify-between">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Password : pO2(eO73)%@
                    </label>
                </div>
                <input type="password" name="password" onChange={handlePassword} ref={ref} />

                {len === false ?
                    admininfo.password?.length === 0 || admininfo.password === undefined ? <pre></pre> :
                        (isWrongPw === 'true' ?
                            admininfo.password.length > 15 ?
                                (<pre><h6 className='text-orange-500 text-sm'>* password가 15자를 넘었습니다..</h6></pre>) :
                                (<pre><h6 className='text-red-500 text-sm'>* Wrong password form.<br />영어 소문자, 대문자, #?!@$ %^&*- 포함<br />6자이상 </h6></pre>) :
                            (<pre><h6 className='text-green-500 text-sm'>* good password form.</h6></pre>)
                        )
                    : <pre></pre>}
            </div>

            <MoveButton style="w-full mt-[45px]" click={() => handleSubmit()} >Login</MoveButton>
            <div className="grid grid-cols-3 text-center py-3">
                자동로그아웃시간
                <select name="timeSelect" defaultValue='30' >
                    <option value='30'>30분</option>
                    <option value='60'>1시간</option>
                    <option value='240'>3시간</option>
                </select>
                <MoveButton>인증센터 바로가기</MoveButton>
            </div>

            <button
                className="text-xs text-gray-500 hover:text-gray-900 text-end w-full mt-2" onClick={() => forgetPw()}>
                Forget Password?
            </button>
            <div className="w-full items-center content-center justify-center">
                <span className="text-red-500">*</span><span className="text-slate-500">소셜로그인시 기능이 제한될수 있습니다.</span>
                <OAuth />
            </div>
        </div >

    )
};
