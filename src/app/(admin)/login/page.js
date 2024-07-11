import { viewport as dataViewport } from "@/data/meta";
export const viewport = dataViewport

import { Header } from "@/components/header";

export default function Home() {
    return (
        <>
            <Header />
            Home
            <Header />
        </>
    );
}
