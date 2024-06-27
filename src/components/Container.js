import React from "react";
import { cn } from "./MergeClass.js";

export const Container = ({ children, className }) => {
    return (
        <div className={cn("container px-4 mx-auto dark:text-white/70", className)}>
            {children}
        </div>
    );
}

export default Container;