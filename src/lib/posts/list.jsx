import { StringToCode } from "../code/converter"
import { cn } from "../utils"

export const PostList = ({ text, ...prop }, key) => {
    return(
        <ul
            key={key}
            className={cn(
                prop?.className,
                "items-start list-disc list-inside text-slate-700 dark:text-slate-400"
            )}
        >
            {text.map((t, k) => {
                return (
                    <li
                        key={k}
                        className="mt-2 text-slate-700 dark:text-slate-400"
                        dangerouslySetInnerHTML={{ __html: StringToCode(t.text) }}>
                    </li>
                )
            })}
        </ul>
    )
}