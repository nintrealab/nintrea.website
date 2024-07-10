"use client";
import { useMemo, useState } from 'react';
import { Article, LoadingArticle } from './article';
import { CardEffect } from '@/components/card-effect';

export const ListArticles = () => {
    const [data, setData] = useState({});
    const [posts, setPosts] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const currentDataPromise = useMemo(async () => {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        return data;
    }, []);

    currentDataPromise.then(currentData => {
        setData(currentData);
        setPosts(currentData.products);
        setLoading(false);
    });

    return (
        <div className="grid max-w-5xl gap-4 mx-auto sm:grid-cols-2 md:grid-cols-3">
            {
                isLoading
                ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map( (_, key)=> {
                    return (
                        <CardEffect key={key}>
                            <LoadingArticle/>
                        </CardEffect>
                    )
                })
                : Array.from(posts).map( (post, key)=> {
                    return (
                        <CardEffect key={key}>
                            <Article data={post}/>
                        </CardEffect>
                    )
                })
            }
        </div>
    );
}