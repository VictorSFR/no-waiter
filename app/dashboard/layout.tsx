import NavBar from "@/app/ui/navbar";
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <NavBar/>
            {children}
        </div>
    );
}