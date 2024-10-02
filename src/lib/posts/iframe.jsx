import { useState } from "react";

export const PostIframe = ({ text, ...prop }, key) => {
    const [html, setHtml] = useState("")
    const [loading, setLoading] = useState(true)

    const fetchText = async () => {
        const response = await fetch(prop.properties.src);
        const html = await response.text();
        setHtml(html)
        setLoading(false)
    }
    fetchText()

    return (
        <div key={key} className="relative grid gap-0 mb-5">
            <div
                className="z-10 overflow-hidden border lg:px-10 rounded-xl bg-slate-50" style={{
                    backgroundImage: 'linear-gradient(rgba(197, 76, 50, .1) 1px, transparent 1px), linear-gradient(90deg, rgba(197, 76, 50, .1) 1px, transparent 1px)',
                    backgroundSize: '1.4em 1.4em'
                }}>
                {prop.properties.srcDoc
                    ? !loading && <iframe srcDoc={prop.properties.srcDoc} key={key} className="w-full bg-background h-fit drop-shadow-xl"></iframe>
                    : !loading && <iframe srcDoc={html} className="w-full h-fit min-h-full aspect-[16/5] drop-shadow-xl bg-background/10"></iframe>
                }
            </div>
            {
                prop.properties.text
                && !loading && <p className="pt-5 text-xs leading-7 text-center -translate-y-5 border-b text-foreground/60 -bottom-5 -z-10 bg-slate-50 border-x rounded-b-xl">
                    {prop.properties.text}
                </p>
            }
        </div>
    );
};