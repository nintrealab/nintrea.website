import Link from "next/link"

export const LinkComponent = ({ href, children, ...props }) => {
    return (
        <Link href={href} {...props} className="inline-flex items-center justify-center text-sm font-medium transition-colors border rounded-full shadow-sm whitespace-nowrap focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 h-9 w-9 border-input bg-background hover:bg-accent text-foreground/60 hover:text-foreground">
            { children }
        </Link>
    )
}