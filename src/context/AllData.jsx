"use client"

import { authClient } from "@/app/lib/auth-client";
import { createContext } from "react";



export const AllDataCollect = createContext()


const AllData = ({ children }) => {
    const { data: session, refetch } = authClient.useSession();

    const data = {
        session
    }
    return (
        <div>
            <AllDataCollect.Provider value={data}>
                {children}
            </AllDataCollect.Provider>
        </div>
    );
};

export default AllData;