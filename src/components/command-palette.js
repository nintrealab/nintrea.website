"use client"
import { Dialog } from "@radix-ui/react-dialog";
import { useState } from "react";
// import { Button } from "@/components/ui/button"

// import { Input } from "@/components/input"
// import { Label } from "@/components/label"
 
export default function CommandPalette(){
    const [ isOpen, setIsOpen ] = useState(true);
    return(
        <Dialog 
            open={isOpen} 
            onClose={setIsOpen} 
            className="flex inset-0 bg-purple-500 overflow-y-auto  "
        >

        <Dialog.overlay className="flex inset-0 bg-slate-500/75 "/>
                <div className="flex w-full bg-red-400s h-24 m-auto items-center justify-center ">
                    <div className="flex max-w-xl bg-green-400 py-4 px-3 rounded-md ring-0 ">
                        <p>hello here is a search modal</p>
                    </div>
                </div>
        </Dialog>
    )
}s