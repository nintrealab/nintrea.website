"use client"
import { Dialog, DialogBackdrop, DialogPanel, Combobox, ComboboxOption, ComboboxOptions, ComboboxInput } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

import { useState } from "react";
// import { Button } from "@/components/ui/button"

// import { Input } from "@/components/input"
// import { Label } from "@/components/label"

const people = [
    { id: 1, name: 'Leslie Alexander', url: '#' },
    { id: 2, name: 'San Siro', url: '#' },
    { id: 3, name: 'San Shy', url: '#' },
    { id: 4, name: 'San Chhay', url: '#' },
    { id: 5, name: 'ALiza', url: '#' },
    { id: 6, name: 'Amozi', url: '#' },
    { id: 7, name: 'ALizara', url: '#' },
    { id: 8, name: 'Amozirah', url: '#' },
    // More people...
]
 
export default function CommandPalette({ isOpen=false, setIsOpen = ()=>{} })
{
    const [ query, setQuery ] = useState("");

    const filteredPeople =
    query === '' ? [] : people.filter((person) => { return person.name.toLowerCase().includes(query.toLowerCase()) })

    return(
        <Dialog
            open={isOpen}
            onClose={() => {
                setQuery('')
                setIsOpen(false)
            }}
            className="relative z-10"
        >

            <DialogBackdrop
                transition
                className="fixed top-0 left-0 w-full h-full backdrop-blur-sm bg-gray-900 bg-opacity-10 transition-opacity 
                        data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in 
                        z-50 "
            />
            <div className="fixed inset-0 z-50 w-screen overflow-y-auto p-4 sm:p-6 md:p-20 md:pt-[20vh]">
            <DialogPanel
                transition
                className="mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl opacity-80 bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                >
                    <Combobox
                        onChange={(person) => {
                        if (person) {
                            window.location = person.url
                        }
                        }}
                    >
                        <div className="relative">
                        <MagnifyingGlassIcon
                            className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                        />
                        <ComboboxInput
                            autoFocus
                            className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm "
                            placeholder="Search..."
                            onChange={(event) => setQuery(event.target.value)}
                            onBlur={() => setQuery('')}
                        />
                        </div>

                        {filteredPeople.length > 0 && (
                        <ComboboxOptions className="max-h-72 scroll-py-2 divide-y divide-gray-200 overflow-y-scroll scrollbar scrollbar-width-10 scrollbar-height-10  py-2 text-sm text-gray-800">
                            {filteredPeople.map((person) => (
                            <ComboboxOption
                                key={person.id}
                                value={person}
                                className="hover:transition-all  scroll-smooth select-none px-4 py-3 data-[focus]:bg-blue-100 data-[focus]hover:text-sky-300 hover:text-sky-500"
                            >
                                {person.name}
                            </ComboboxOption>
                            ))}
                        </ComboboxOptions>
                        )}

                        {query !== '' && filteredPeople.length === 0 && (
                        <p className="p-4 text-sm text-gray-500">No people found.</p>
                        )}
                    </Combobox>
            </DialogPanel>
            </div>
        
        </Dialog>
    )
}