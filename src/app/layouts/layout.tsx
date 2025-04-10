import NavigationMenu from "@/widgets/NavigationMenu/ui/NavigationMenu"

interface Layout {
    children: React.ReactNode
}

export default function AppLayout({ children }: Layout) {
    return (
        <div className="flex">
            {/* header */}
            <div>
                < NavigationMenu />
                <main className="flex-1">{children}</main>
            </div>
        </div>
    )
}  