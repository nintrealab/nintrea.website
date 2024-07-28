import Image from "next/image";

// Post Heading Elements
const Heading1 = ({ text, ...prop }, key) => {
    return(
        <h1
            { ...prop }
            key={key}
            id={String(text).replace(/\s+/g, "-").toLocaleLowerCase()}
            className="my-3 text-xl font-bold tracking-tight text-slate-900 dark:text-slate-200"
        >
            {text}
        </h1>
    )
}

const Heading2 = ({ text, ...prop }, key) => {
    return(
        <h2
            { ...prop }
            key={key}
            id={String(text).replace(/\s+/g, "-").toLocaleLowerCase()}
            className="my-3 text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-200"
        >
            {text}
        </h2>
    )
}

const Heading3 = ({ text, ...prop }, key) => {
    return(
        <h3
            { ...prop }
            key={key}
            id={String(text).replace(/\s+/g, "-").toLocaleLowerCase()}
            className="my-3 text-xl font-bold tracking-tight text-slate-900 dark:text-slate-200"
        >
                {text}
        </h3>
    )
}

const Heading4 = ({ text, ...prop }, key) => {
    return(
        <h4
            { ...prop }
            key={key}
            id={String(text).replace(/\s+/g, "-").toLocaleLowerCase()}
            className="my-3 text-lg font-bold tracking-tight text-slate-900 dark:text-slate-200"
        >
            {text}
        </h4>
    )
}

const Heading5 = ({ text, ...prop }, key) => {
    return(
        <h5
            { ...prop }
            key={key}
            id={String(text).replace(/\s+/g, "-").toLocaleLowerCase()}
            className="my-3 text-base font-bold tracking-tight text-slate-900 dark:text-slate-200"
        >
            {text}
        </h5>
    )
}

const Heading6 = ({ text, ...prop }, key) => {
    return(
        <h6
            { ...prop }
            key={key}
            id={String(text).replace(/\s+/g, "-").toLocaleLowerCase()}
            className="my-3 text-sm font-bold tracking-tight text-slate-900 dark:text-slate-200"
        >
            {text}
        </h6>
    )
}

const Paragraph = ({ text, ...prop }, key) => {
    return(
        <p
            { ...prop }
            key={key}
            id={String(text).replace(/\s+/g, "-").toLocaleLowerCase()}
            dangerouslySetInnerHTML={{ __html: text }}
            className="my-8 leading-7"
        />
    )
}


const Img = ({ text, ...prop }, key) => {
    return (
        <div key={key} id={String(text).replace(/\s+/g, "-").toLocaleLowerCase()} className="flex flex-col items-center justify-center w-full">
            <Image { ...prop } alt={text} width={512} height={512} className="object-cover w-full mt-7 rounded-2xl" />
            <p className="text-center text-slate-700 dark:text-slate-400">{text || prop.alt}</p>
        </div>
    )
}

const types = [
    { name: 'h1', path: Heading1 },
    { name: 'h2', path: Heading2 },
    { name: 'h3', path: Heading3 },
    { name: 'h4', path: Heading4 },
    { name: 'h5', path: Heading5 },
    { name: 'h6', path: Heading6 },
    { name: 'p', path: Paragraph },
    { name: 'image', path: Img },
]

export const Post = ({
    type,
    text,
    ...prop
}) => {
    return types.map((t, k) => {
        if (t.name == type) {
            return t.path({text: text, ...prop}, k);
        }
    })
}