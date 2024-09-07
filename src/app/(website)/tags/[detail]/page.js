"use client"
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { Hero } from "./hero";
import { ContentBackground } from "../../blogs/(blogs)/content-background";
import { useParams } from "next/navigation";
import { viewport as dataViewport } from "@/data/meta";
import Image from "next/image";
import Animal from "@/assets/images/animal.webp"
import { Button } from "@headlessui/react";
import Link from "next/link";
import { CardEffect } from "@/components/card-effect";
import { samplePost } from "@/data/posts";
import {GroupArticle} from "../../blogs/(blogs)/article";
export const viewport = dataViewport
const TagPost=samplePost
export const Detail = () => {
    const { detail } = useParams()
    const beautyPosts = TagPost.filter(TagPost => TagPost.tags.includes("beauty"));

    beautyPosts.forEach(TagPost => {
      console.log(TagPost.tags[0]); // or whatever property you want to access
    });
    return (
        <>
        <ContentBackground/>
        <Hero/>
        <Container>
        <div className="inline-flex w-[94%] m-auto items-center justify-center gap-10 ">
                    
        </div>
                <div className="my-10"></div>
            <div className="w-[70%] gap-5 justify-center items-center m-auto">
            <div className="grid grid-cols-3 gap-5">
                { 
                    Array.from(TagPost).map( (post, key)=> {
                        return (
                            <CardEffect key={key}>
                                <GroupArticle data={post}/>
                            </CardEffect>
                        )
                    })    
                }
            </div>
            </div>
        </Container>
        </>
    );
}
export default Detail;