"use client"
import { Card, LoadingCard } from "./card";
import { authors } from "@/data/authors";
import { CardEffect } from "@/components/card-effect";

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
        <div role="list" className="grid grid-cols-2 gap-3 p-3 mx-auto mt-10 max-w-7xl lg:grid-cols-4">
            {
                authors && authors.map((user, index) => {
                    return (
                        <CardEffect key={index}>
                            <Card data={user}/>
                        </CardEffect>
                    )
                })
            }
        </div>
    )
}