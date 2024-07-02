import { cn } from "@/lib/utils";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
    CodeBracketIcon,
    EllipsisVerticalIcon,
    FlagIcon,
    StarIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";

export default function CardBanner() {
    return (
        <div className="w-full px-4 py-5 bg-white sm:px-6">
            <div className="flex space-x-3">
                <div className="flex-shrink-0">
                    <Image
                        className="w-10 h-10 rounded-full"
                        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                    />
                </div>
                <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900">
                    <a href="#" className="hover:underline">
                    Chelsea Hagon
                    </a>
                </p>
                <p className="text-sm text-gray-500">
                    <a href="#" className="hover:underline">
                    December 9 at 11:43 AM
                    </a>
                </p>
                </div>
                <div className="flex self-center flex-shrink-0">
                
                </div>
            </div>
        </div>
    );
}
