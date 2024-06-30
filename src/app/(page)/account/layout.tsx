
import AcountMenu from "@/app/component/navigation/accountMenu"

export default function AccountLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <div className="w-full h-full">
                <div className="h-[50px] z-0 fixed top-0">
                    <AcountMenu />
                </div>
                <div className="z-0 top-10">
                    {children}
                </div>
            </div>
        </section>
    )
}