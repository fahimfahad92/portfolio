"use client";

import {useEffect} from "react";
import {useStatsigClient} from "@statsig/react-bindings";

export default function StatsigEvent({eventName, metadata}) {
    const {client} = useStatsigClient();
    useEffect(() => {
        console.log("Logging event: ", eventName);
        client.logEvent(eventName, null, metadata);
    }, [eventName, metadata]);

    return null;
}