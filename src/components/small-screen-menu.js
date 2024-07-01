"use client"

import * as React from "react"
import { DotsVerticalIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/dropdown-menu"

import { menu } from "@/data/module"
import { useRouter } from "next/navigation"

export function SmallScreenMenu({ className }) {
    const router = useRouter()
    return (
        <div className={className}>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                        <DotsVerticalIcon/>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>Menu</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        {
                            menu.map((item, index) =>
                                <DropdownMenuItem
                                    key={index}
                                    onClick={() => {
                                        router.replace(item.path)
                                    }}
                                >
                                    {item.name}
                                    {/* <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut> */}
                                </DropdownMenuItem>
                            )
                        }
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
