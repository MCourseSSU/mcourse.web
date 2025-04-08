interface AppLayoutProps {
    children: React.ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
    return (
        <div className="flex">
            {/* header */}
            <div>
                {/* sidebar */}
                <main className="flex-1">{children}</main>
            </div>
        </div>
    )
}  