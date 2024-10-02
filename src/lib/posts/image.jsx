import Image from 'next/image'
import { cn, stringToUrl } from '@/lib/utils';

export const PostImage = ({ text, ...prop }, key) => {
    return (
        <div key={key} id={stringToUrl(text)} className="flex flex-col items-center justify-center w-full">
            <Image
                alt={prop?.alt || '-post'}
                src={prop?.src || '/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile.6ddb36ab.png&w=640&q=75'}
                width={parseFloat(prop?.width ?? 512)}
                height={parseFloat(prop?.height ?? 512)}
                className={ cn( prop?.className,'object-cover w-full h-full mt-7 rounded-2xl') }
            />
            <p className="text-center text-slate-700 dark:text-slate-400">{text || prop.alt}</p>
        </div>
    )
}
