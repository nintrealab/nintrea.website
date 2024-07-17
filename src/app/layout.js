import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { Poppins } from "next/font/google"
import { cn } from "@/lib/utils";
import { defaultMeta } from "@/data/meta";
import NextTopLoader from 'nextjs-toploader';

const fontSans = Poppins({
    subsets: ["latin"],
    display: 'swap',
    weight: ["400", "500", "600", "700"],
    variable: "--font-sans",
})

export const metadata = defaultMeta

export default function RootLayout({ children }) {
    return (
        <html lang={'en'} suppressHydrationWarning={true} className="scroll-smooth">
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased",
                    fontSans.variable
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <NextTopLoader />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
