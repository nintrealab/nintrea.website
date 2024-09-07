"use client"

import Link from "next/link";
import { Container } from "./container";
import { useEffect, useState } from "react";
import { CardEffect } from "./card-effect";
import { Article } from "@/app/(website)/blogs/(blogs)/article";
// import {} from ""

// console.log(/data/blogs);
export const Topic =()=>{
    
const    [data, setData] = useState([]);
const [isLoading, setLoading] = useState(true);
useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3000/data/blogs.json');
            const currentData = await response.json();
            // console.log(currentData.tags);
            setData(currentData.tags);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };
    fetchData();
}, [setData, setLoading]); // Add dependencies
// console.log(data)
// console.log(data); // Log the actual data
    return(
        <>
   
        <Container className=" flex items-center justify-center max-w-5xl ">
            <div className="flex items-center justify-center max-w-5xl ">
                <ul className   =" flex flex-wrap  items-center justify-center ">
                    {
                        Array.from(data).map((post,key)=>{
                            return (
                                <li key={key} className="rounded-2xl bg-primary cursor-pointer hover:bg-primary-foreground m-1 ">
                                <Link  className=" text-xs flex items-center" href={post.route}>
                                    <span className="text-xs rounded-2xl sm:text-sm ring-1 bg-primary-foreground hover:bg-primary/10 px-2 py-1">
                                    {post.title}<span className="sr-only">{"SDSDSK"}</span>
                                    </span>
                                </Link>
                                </li>
                            )
                        })
                    }    
                </ul>
            </div>
         </Container>
        </>
    );

}