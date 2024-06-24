import React from "react";
import { cn } from "./MergeClass.js";

export const Container = ({ children, className }) => {
    return (
        <div className={cn("container px-4 mx-auto", className)}>
            {children}
        </div>
    );
}

export default Container;