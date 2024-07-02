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
        <div className="w-full pt-10">
            <div className="relative sm:pb-12 sm:ml-[calc(2rem+1px)] md:ml-[calc(3.5rem+1px)] lg:ml-[max(calc(14.5rem+1px),calc(100%-65rem))]">
                <div className="hidden absolute top-0 bottom-0 right-full mr-7 md:mr-[3.25rem] w-px bg-slate-200 dark:bg-slate-800 sm:block"> </div>
                <div className="space-y-16">
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
            </div>
        </div>
    );
}