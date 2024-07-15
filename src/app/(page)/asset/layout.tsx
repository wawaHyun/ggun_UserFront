
import AccountMenu from "@/app/component/navigation/accountMenu"

export default function AccountLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="w-full h-full justify-center flex">
        <div className="w-[80%]">
            <div className="sticky left-0 top-[55px] z-5">
                        <AccountMenu/>
                    </div>
            <div className="w-full h-auto z-0 top-10 z-0">
                {children}
            </div>
        </div>
        </div>
    )
}