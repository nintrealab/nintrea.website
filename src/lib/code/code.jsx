import { getBlockTitle } from "notion-utils";
import React, {
    memo,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState
} from "react";
import { cs, useNotionContext, Text } from "react-notion-x";
import { codeToHtml } from "shiki";
import { ObserverManager } from "./manager";

const _Code = ({
    block,
    className,
    defaultLanguage = "typescript",
    themes = {
        light: "catppuccin-latte",
        dark: "dracula"
    },
    IntersectionObserverOptions = {
        rootMargin: "0px",
        threshold: 0.1
    },
    showCopy = true,
    showFileName = true,
    lazyRendering = true
}) => {
    const { recordMap } = useNotionContext();
    const content = getBlockTitle(block, recordMap, [block]);
    const [code, setCode] = useState(undefined);
    const [isCopied, setIsCopied] = useState(false);
    const timer = useRef(null);
    const codeRef = useRef(null);

    const observerManager = useMemo(() => {
        return ObserverManager.getInstance(IntersectionObserverOptions);
    }, [IntersectionObserverOptions]);

    const renderCodeToHtml = useCallback(async () => {
        const htmlCode = await codeToHtml(content, {
            lang: (
                block.properties?.language?.[0]?.[0] || defaultLanguage
            ).toLowerCase(),
            themes
        });

        setCode(htmlCode);

        if (codeRef.current) {
            observerManager.unobserve(codeRef.current);
        }
    }, [
        content,
        block.properties?.language,
        defaultLanguage,
        themes,
        observerManager
    ]);

    useEffect(() => {
        setCode(undefined); // Reset code when block changes
    }, [block]);

    useEffect(() => {
        if (code) return;

        const element = codeRef.current;
        let unobservedElement = null;

        if (lazyRendering) {
            if (element) {
                unobservedElement = observerManager.observe(element, renderCodeToHtml);
            }
        } else {
            renderCodeToHtml();
        }

        return () => {
            unobservedElement?.();
        };
    }, [renderCodeToHtml, lazyRendering, code, observerManager]);

    const clickCopy = useCallback(() => {
        navigator.clipboard.writeText(content).then(() => {
            setIsCopied(true);
            if (timer.current) {
                clearTimeout(timer.current);
                timer.current = null;
            }
            timer.current = setTimeout(() => {
                setIsCopied(false);
                timer.current = null;
            }, 1500);
        });
    }, [content]);

    return (
        <figure>
            <div
                ref={codeRef}
                className={cs('w-full text-base my-2 border bg-gradient-to-br from-foreground/80 to-foreground border-foreground/5 relative rounded-xl', className)}
                style={{
                    "--appear-animation": "opacity 0.1s linear"
                }}>

                <div className="relative flex text-xs leading-6 min-h-10 text-slate-400">
                    { showFileName && block.properties?.file
                        ? <div className="flex items-center flex-none px-4 py-1 mt-1 text-sm font-light border-t border-b font-code text-background/50 border-t-transparent border-primary"> {block.properties.file} </div>
                        : null
                    }
                    <div className="flex flex-auto pt-2 overflow-hidden rounded-tr-xl">
                        <div className="flex-auto -mr-px border rounded-tl bg-background/10 border-foreground/5"></div>
                    </div>
                    <div className="absolute right-0 flex items-center pr-4 top-2">

                        <div className="relative flex items-center justify-center w-8 h-8 -mr-2">
                            {showCopy ? (
                                <button onClick={clickCopy} className="text-background">
                                    {
                                        isCopied
                                        ? (
                                            <span className="relative">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="relative size-6 text-primary">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
                                                </svg>
                                                <div className="absolute left-0 px-2 text-[12px] leading-5 -translate-x-1/2 rounded-md pointer-events-none bg-primary w-fit top-6">
                                                    {'Copied'}
                                                </div>
                                            </span>
                                        )
                                        : (
                                            <span className="relative">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                                                </svg>
                                            </span>
                                        )
                                    }
                                </button>
                            ) : null}
                        </div>

                    </div>
                </div>

                {!code ? (
                    <pre className="px-5 py-4 my-2 overflow-auto rounded-lg [&_*]:font-code">{content}</pre>
                ) : (
                    <div dangerouslySetInnerHTML={{ __html: code }} className="px-5 py-4 my-2 overflow-auto rounded-lg [&>pre]:!bg-transparent [&_*]:font-code"/>
                )}
            </div>
            {block.properties.caption && (
                <figcaption className={'text-sm text-gray-500 px-0 py-5 whitespace-pre-wrap break-words caret-[var(--fg-color)] leading-5 text-[var(--fg-color-3)]'}>
                    <p dangerouslySetInnerHTML={{ __html: block.properties.caption }} className="[&_code]:font-code [&_code]:text-primary"/>
                </figcaption>
            )}
        </figure>
    );
};

export const Code = memo(_Code);

export const CodeBlock = ({ text, ...prop }, key) => {
    return (
        <Code
            key={key}
            block={{
                properties: {
                    ...prop?.properties,
                    title: [[ text ]],
                }
            }}
            themes={{
                light: "material-theme-lighter",
                dark: "dracula"
            }}
        />
    );
};