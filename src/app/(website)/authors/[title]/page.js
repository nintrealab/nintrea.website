"use client"
import { useParams  } from "next/navigation";

export default function Author() {
    const { title } = useParams()
    return (
        <div className="flex">{title}</div>
    )
}


export async function generateStaticParams() {
    // Return an array of possible title values
    return [
        { params: { title: 'title1' } },
        { params: { title: 'title2' } },
        // Add more title values as needed
    ];
}
