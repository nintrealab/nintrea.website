export const GridBackground = () => {
    return (
        <svg className="absolute mt-4 -z-10 pointer-events-none inset-0 h-full w-full stroke-primary/10  opacity-50 [mask-image:radial-gradient(100%_100%_at_top_center,white,transparent)]" aria-hidden="true">
            <defs>
                <pattern id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
                    <path d="M100 200V.5M.5 .5H200" fill="none"></path>
                </pattern>
            </defs>
            <svg x="50%" y="-1" className="overflow-visible fill-primary/5">
                <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" strokeWidth="0"></path>
            </svg>
            <rect width="100%" height="100%" strokeWidth="0" fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"></rect>
        </svg>
    );
}
