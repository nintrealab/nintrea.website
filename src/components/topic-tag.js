"use client"

import Link from "next/link";
import { Container } from "./container";

console.log(Blogs);
export const Topic =()=>{

    // <useEffect() => {
    //   first
    
    //   return () => {
    //     second
    //   }
    // }, [third])
    
    return(
        <>
        <Container className=" flex items-center justify-center max-w-5xl ">
            <div className="flex items-center justify-center max-w-5xl ">
                
                
                <ul className   =" flex flex-wrap  items-center justify-center ">
                   <li className="rounded-2xl bg-primary cursor-pointer hover:bg-primary-foreground m-1 ">
                    <Link  className=" text-xs flex items-center" href="/tags/test-blogs"
                    >
                        <span className="text-xs rounded-2xl sm:text-sm ring-1 bg-primary-foreground hover:bg-primary/10 px-2 py-1">
                            Read more<span className="sr-only">{"SDSDSK"}</span>
                        </span>
                    </Link>
                    </li>
                </ul>


            </div>
         </Container>
        </>
    );

}