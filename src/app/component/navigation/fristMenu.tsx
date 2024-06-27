function FirstMenu() {

    interface ISubmenu {
        id: number;
        title: string;
        address: any;
    }

    const memus = [
        { id: 1, title: "주식 용어 사전", address: () => "#" },
        { id: 2, title: "거래시작하기", address: () => "#" },
        { id: 3, title: "자료실", address: () => "#" },
        { id: 4, title: "주식계좌개설", address: () => "#" },
        { id: 5, title: "자주 찾는 메뉴", address: () => "#" },
    ]


    return (
        <nav className="w-full h-full bg-pebble-500">
            <ul className="w-full h-full grid grid-cols-7">
                <li> <button className="bg-amber-200 h-full w-full text-right justify-center items-center px-3">처음오셨나요?</button></li>
                <li className="overflow-hidden justify-right flex"> 
                    <div className="bg-amber-200 origin-bottom -rotate-45 -translate-y-6 ring-[33px] ring-offset-0 ring-amber-200 h-[30px] w-[150px]"></div>
                </li>
                {memus.map((hover: ISubmenu, i: number) => (
                    <li key={hover.id} className="">
                        <button className="hover:text-lg text-white h-full w-full text-center justify-center items-center"
                            onClick={hover.address}>{hover.title}</button>
                    </li>))}
            </ul>
        </nav>
    );
}

export default FirstMenu;