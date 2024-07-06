"use client"
import { useState } from "react";
import { Dialog } from "@headlessui/react";

export default function CommandPalette(){
    const [ isOpen, setIsOpen ] = useState(true);
    return(
        <Dialog open={isOpen} onClose={setIsOpen} className="flex inset-0 bg-purple-500 overflow-y-auto">
            <div className="flex w-full bg-red-400 h-24 m-auto items-center justify-center ">
                <div className="flex max-w-xl bg-green-400 py-4 px-3">
                <p>hello here is a search modal</p>
                </div>
            </div>

        </Dialog>
    )
}