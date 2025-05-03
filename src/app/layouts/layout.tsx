import Header from "@/widgets/navigation/Header/Header"

interface Layout {
    children: React.ReactNode
}

export default function AppLayout({ children }: Layout) {
    return (
        <div className="flex">
                <Header />
            <div>
                {/* sidebar */}
                <main className="flex-1">{children}</main>
            </div>
        </div>
    )
}  