"use client"

import { useMemo, useState } from "react";
import { Card, LoadingCard } from "./card";
import { authors } from "@/data/authors";

export const ListCards = () => {
    // const [users, setUsers] = useState([]);
    // const [isLoading, setLoading] = useState(true);

    // const currentDataPromise = useMemo(async () => {
    //     const response = await fetch('https://dummyjson.com/users');
    //     const data = await response.json();
    //     return data;
    // }, []);

    // currentDataPromise.then(currentData => {
    //     setUsers(currentData.users);
    //     setLoading(false);
    // });

    return(
        <div role="list" className="grid max-w-6xl grid-cols-1 gap-6 mx-auto lg:grid-cols-4">
            {
                // isLoading
                // ? [1,2,3,4,5,6,7,8,9].map((_,key)=> <LoadingCard key={key}/>)
                // : users.map((user, index) => {
                //     return <Card key={index} data={user}/>
                // })


                authors.map((user, index) => {
                    return <Card key={index} data={user}/>
                })
            }
        </div>
    )
}