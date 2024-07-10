"use client"
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";


export function CardEffect({ className, children }) {
    const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const containerRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const lightSize = rect.width * 0.5; // 50% of container's width, equal to light size in css file
        const x = e.clientX - rect.left - lightSize / 2;
        const y = e.clientY - rect.top - lightSize / 2;
        setHoverPosition({ x, y });
    };

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <div className={'relative overflow-hidden h-full transition-colors duration-300 bg-card/10 hover:ring-card ring-1 ring-inset ring-card/10 sm:rounded-3xl'}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={containerRef}>
                {children}
            <div
                className={cn('absolute w-1/3 h-full rounded-full blur-[120px] bg-primary/30 pointer-events-none', className)}
                style={{
                    left: hoverPosition.x,
                    top: hoverPosition.y,
                    zIndex: -1,
                    opacity: isHovering ? '1' : '0',
                    transition: 'opacity 500ms ease',
                }}
            />
        </div>
    );
}