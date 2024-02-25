'use client'

import { Spinner } from "@/components/providers/spinner";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import { ReactNode } from "react";
import Navigation from "./_components/navigation";


const MainLayout = ({
    children
}: {
    children: ReactNode
}) => {
    const { isLoading, isAuthenticated } = useConvexAuth()

    if(isLoading){
        return (
            <div className="h-full flex items-center justify-center">
                <Spinner size={'lg'}/>
            </div>
        )
    }

    if(!isAuthenticated){
        redirect('/')
    }

    return (
        <div className="h-full flex dark:bg-[#1F1F1F]">
            <Navigation/>
            {children}
        </div>
    )
}

export default MainLayout