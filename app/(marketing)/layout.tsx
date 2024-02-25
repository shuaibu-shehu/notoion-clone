import { ReactNode } from "react";
import { Navbar } from "./_components/Navbar";
import Footer from "./_components/Footer";

const MarketingLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="h-full dark:bg-[#1F1F1F] ">
            <main className="h-full pt-40">
                <Navbar />
                {children}
            </main>
        </div>
    )
}

export default MarketingLayout