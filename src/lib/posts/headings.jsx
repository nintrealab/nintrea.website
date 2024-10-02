import { cn, stringToUrl } from "@/lib/utils"

const defaultVariants = (className) => {
    return cn(className, "tracking-tight text-slate-900 dark:text-slate-200")
}

export const PostHeading1 = ({ text, ...prop }, key) => {
    return(
        <h1
            key={key}
            id={stringToUrl(text)}
            className={defaultVariants("my-4 text-4xl font-bold")}
            { ...prop }
        >
            {text}
        </h1>
    )
}

export const PostHeading2 = ({ text, ...prop }, key) => {
    return(
        <h2
            key={key}
            id={stringToUrl(text)}
            className={defaultVariants("my-3 text-2xl font-semibold")}
            { ...prop }
        >
            {text}
        </h2>
    )
}

export const PostHeading3 = ({ text, ...prop }, key) => {
    return(
        <h3
            key={key}
            id={stringToUrl(text)}
            className={defaultVariants("my-3 text-xl font-semibold")}
            { ...prop }
        >
            {text}
        </h3>
    )
}

export const PostHeading4 = ({ text, ...prop }, key) => {
    return(
        <h4
            key={key}
            id={stringToUrl(text)}
            className={defaultVariants("my-3 text-lg font-semibold")}
            { ...prop }
        >
            {text}
        </h4>
    )
}

export const PostHeading5 = ({ text, ...prop }, key) => {
    return(
        <h5
            { ...prop }
            key={key}
            id={stringToUrl(text)}
            className={defaultVariants("my-3 text-base font-semibold")}
        >
            {text}
        </h5>
    )
}

export const PostHeading6 = ({ text, ...prop }, key) => {
    return(
        <h6
            { ...prop }
            key={key}
            id={stringToUrl(text)}
            className={defaultVariants("my-3 text-sm font-semibold")}
        >
            {text}
        </h6>
    )
}