
import AcountMenu from "@/app/component/navigation/accountMenu"

export default function AccountLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="w-full h-full ">
            <div className="h-[50px] z-0 fixed top-0">
                <AcountMenu />
            </div>
            <div className="w-full h-auto z-0 top-10">
                {children}
            </div>
        </div>
    )
}