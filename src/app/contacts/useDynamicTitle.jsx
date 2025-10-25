"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function useDynamicTitle(){
    const pathname = usePathname();

    useEffect(() => {
        let title = "OneFluency"

        if (pathname === "/"){
            title = "Home - OneFluency"
        }else if (pathname === "/contacts"){
            title = "Contacts - OneFluency"
        }else title = "OneFluency"

        document.title = title
    }, [pathname])

    return null;
}