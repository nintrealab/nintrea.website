"use client";
import { useMemo, useState } from 'react';
import { Article, LoadingArticle } from './article';

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
        <div className="grid max-w-5xl grid-cols-3 gap-2 mx-auto">
            {
                isLoading
                ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map( (_, key)=> {
                    return (
                        <LoadingArticle key={key}/>
                    )
                })
                : Array.from(posts).map( (post, key)=> {
                    return <Article key={key} data={post}/>;
                })
            }
        </div>
    );
}