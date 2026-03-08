"use client";

import {StatsigProvider} from "@statsig/react-bindings";
import {useEffect, useState} from "react";

import {getBrowserUserId, getBrowserUserInfo} from "@/app/_lib/statsig-util";

export default function StatsigProviderWrapper({children}) {

    const [user, setUser] = useState(null);

    useEffect(() => {

        const deviceInfo = getBrowserUserInfo();
        const userId = getBrowserUserId();

        const newUser = {
            userID: userId,
            custom: {
                ...deviceInfo,
            },
        };

        console.log("Statsig user:", newUser);

        setUser(newUser);

    }, []);

    if (!user) return null;

    return (
        <StatsigProvider
            sdkKey={process.env.NEXT_PUBLIC_STATSIG_CLIENT_KEY}
            user={user}
            waitForInitialization={true}
        >
            {children}
        </StatsigProvider>
    );
}