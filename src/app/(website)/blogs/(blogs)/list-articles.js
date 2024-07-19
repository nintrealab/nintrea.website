import { Article, LoadingArticle } from './article';
import { CardEffect } from '@/components/card-effect';
import { cn } from '@/lib/utils';
import { samplePost } from '@/data/posts';

export const ListArticles = ({
    className
}) => {

    const posts = samplePost

    return (
        <div className={cn("grid max-w-5xl gap-2 sm:gap-4 mx-auto sm:grid-cols-2 md:grid-cols-3 px-3",className)}>
            {
                // isLoading
                // ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map( (_, key)=> {
                //     return (
                //         <CardEffect key={key}>
                //             <LoadingArticle/>
                //         </CardEffect>
                //     )
                // })
                // :
                Array.from(posts).map( (post, key)=> {
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