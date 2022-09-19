import Navbar from "./navbar";

export default function Layout({ children }: { children: any }) {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                {children}
            </main>
        </>
    )
}
