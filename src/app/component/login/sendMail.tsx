'use client'

// import { useForm } from 'react-hook-form';
import { BrownButton, MoveButton } from '../button/buttons';
import { MapIcon, ClipIcon, XIcon } from '@/app/common/icon/icon';
import { useState } from 'react';
// import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { sendMail } from '@/app/api/email/route';
import { useFormState } from 'react-dom';
import { fromUnixTime } from 'date-fns';

export default function SendMail() {

    // const queryClient = useQueryClient()
    let [isOpen, setIsOpen] = useState(false);

    // const [state, formaction] = useFormState(subminForm,null);
    // const form = useForm();
    // const data = "dd"

    // const mutation = useMutation({
    //     mutationFn: sendMail,
    //     onSuccess: () => {
    //         queryClient.invalidateQueries({queryKey:[data]})
    //     },
    // })
    
    const onSubmit = () => {
        // console.log('onSubmit',mail)
        // sandMailToAdmin()
     }

    const sandMailToAdmin = async () => {
        try {
            await fetch('/api/email');
        } catch (error) {
            console.error("Failed to fetch exchange rates:", error);
        }
    };


    return (

        <div className="">

            <BrownButton click={() => setIsOpen(!isOpen)} >관리자 문의 메일 보내기</BrownButton>

            {isOpen == true ?
                <div className="fixed z-10 top-[100px] left-[25%] rounded-lg h-auto w-[50%] bg-white text-black border shadow-lg pl-8 flex justify-start">
                    <div className="w-full my-3">
                        <div className='flex justify-center w-[100%]'>
                            {/* <form className="w-[100%]" {...from} action={formaction}> */}
                            <form className="w-[100%]">
                                <div className="text-center text-[20px] my-3">관리자 이메일 문의 <br /><br /> <hr /></div>

                                <div className='space-y-2'>
                                    <input className="" placeholder='회신받을 이메일'
                                        // type="eamil" {...register('email', { required: true, maxLength: 100 })} />
                                        type="eamil" />

                                    <input className="" placeholder="Title"
                                        // type="text" {...register('title', { required: true, maxLength: 30 })} />
                                        type="text"  />

                                    <textarea className="h-[200px] w-full" placeholder="Describe everything about this post here"
                                        // {...register('content', { required: true, maxLength: 300 })} 
                                        />
                                </div>
                                <div className="icons flex text-gray-500 m-2">
                                    <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <MapIcon />
                                    </svg>
                                    <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <ClipIcon />
                                    </svg>
                                    <div className="count ml-auto text-gray-400 text-xs font-semibold">0/300</div>
                                </div>
                                <div className="buttons flex gap-5 justify-center h-[50px]">
                                    <MoveButton click={sandMailToAdmin} >메일보내기</MoveButton>
                                </div>
                            </form >
                        </div>
                    </div>
                    <button className="bg-white left-[50%] h-[40px] w-[30px] rounded-lg z-5" onClick={() => { setIsOpen(!isOpen), console.log("fff") }} ><XIcon color="gray" /></button>
                </div>
                : <div></div>}
        </div>
    );
}