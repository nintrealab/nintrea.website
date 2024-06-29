import { cn } from "@/lib/utils";

export const Container = ({ children, className }) => {
    return (
        <div className={cn("container px-4 mx-auto dark:text-white/70", className)}>
            {children}
        </div>
    );
}
