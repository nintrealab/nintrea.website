"use client"

import { useMemo, useState } from "react";
import { Card, LoadingCard } from "./card";

export const ListCards = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const currentDataPromise = useMemo(async () => {
        const response = await fetch('https://dummyjson.com/users');
        const data = await response.json();
        return data;
    }, []);

    currentDataPromise.then(currentData => {
        setUsers(currentData.users);
        setLoading(false);
    });

    return(
        <ul role="list" className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {
                isLoading
                ? [1,2,3,4,5,6,7,8,9].map((_,key)=> <LoadingCard key={key}/>)
                : users.map((user, index) => {
                    return <Card key={index} data={user}/>
                })
            }
        </ul>
    )
}