import Link from "next/link"

export const LinkComponent = ({ href, children, ...props }) => {
    return (
        <Link
            href={href}
            {...props}
            className="inline-flex items-center justify-center text-sm font-medium transition-colors border rounded-full shadow-sm pointer-events-auto whitespace-nowrap focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 shrink-0 h-7 w-7 sm:h-9 sm:w-9 border-input/20 bg-primary/80 hover:bg-accent text-background hover:text-foreground"
        >
            { children }
        </Link>
    )
}