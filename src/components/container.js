import { cn } from "@/lib/utils";

export const Container = ({ children, className }) => {
    return (
        <div className={cn("containe mx-auto max-w-[100rem] px-0 xs:px-4 sm:px-6 md:px-8 xl:px-12 dark:text-white/70", className)}>
            {children}
        </div>
    );
}
