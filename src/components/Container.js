import { cn } from "../helper/cn";

export const Container = ({ children, className }) => {
    return (
        <div className={cn("container px-4 mx-auto dark:text-white/70", className)}>
            {children}
        </div>
    );
}