
'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { WhiteBox } from "@/app/component/style/whiteBox";
import ChartRoomList from "@/app/component/chat/chatRoom";

function ChatRoom() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter()
    const dispatch = useDispatch();
    // const allchatlist = useSelector(getAllChats);

    // useEffect(() => {
    //     dispatch(fetchAllChats())
    // }, [dispatch])

    const myname = 1111;

    return (
        <div className="w-full h-full">
          <ChartRoomList/>
        </div >
    )
}
export default ChatRoom;