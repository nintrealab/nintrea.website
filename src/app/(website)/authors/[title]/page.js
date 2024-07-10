"use client"
import { useParams  } from "next/navigation";

export default function Author() {
    const { title } = useParams()
    return (
        <div className="flex">{title}</div>
    )
}