import Image from "next/image"
import Link from "next/link"
import { WhiteBox } from "../style/whiteBox"
import { roomlistDummy } from "@/app/common/dummy/chat.dummy"
import { useRouter } from "next/navigation";

export default function ChartRoomList () {

    const router = useRouter();

    const roomlist = roomlistDummy;

    return(<>
      {roomlist.map((i: any) =>
                <button key={i.id} className="flex-col py-1 w-full text-left" onClick={() => router.push(`/stock/chatting/${i.senderId}`)}>
                    <WhiteBox style="white hover:bg-pebble-400 flex-col">
                        <div className="">
                            <div className="flex ">
                                <div className="text-sm w-2/3 truncate">{i.sender}와의 대화</div>
                                <div className="text-gray-400 text-xs w-1/3">{i.modDate}</div>
                            </div>
                            {/* <div>
                                        <div className="text-xs row-span-2 text-gray-400 truncate">{i.content}</div>
                                    </div> */}
                        </div>
                    </WhiteBox>

                </button>
            )}
    </>)
}