import { Button } from "@/components/button"
import { Logo } from "@/components/logo"
import { CheckBadgeIcon, CheckCircleIcon } from "@heroicons/react/20/solid"
import { CheckCircledIcon, CheckIcon, FigmaLogoIcon, GitHubLogoIcon, InfoCircledIcon, InstagramLogoIcon, PlusIcon } from "@radix-ui/react-icons"
import Image from "next/image"

export const ProfileHero = ({ data }) => {
    return(
        <>
            <div className="relative w-full">
                <div className="z-40 flex flex-col justify-center w-full gap-5 mt-10 sm:mt-12">
                    <div className="flex items-center mx-auto sm:ml-0">
                        <Image
                            src={ data.image }
                            alt={ `${ data.fullname } profile picture` }
                            width="100"
                            height="100"
                            className=" ring-2 ring-inset ring-border size-24 sm:size-32 drop-shadow rounded-3xl"
                        />
                    </div>
                    <div className="mx-auto sm:ml-0">
                        <h1 className="inline-flex items-center justify-center gap-2 text-2xl font-extrabold tracking-tight w-fit sm:text-3xl sm:justify-start text-primary">
                            <span className="relative">
                                { data.fullname }
                                <CheckBadgeIcon className="absolute top-1.5 -right-8 size-5 sm:size-6 text-sky-600"/>
                            </span>
                        </h1>
                        <p className="text-center sm:text-left text-foreground/90">@{ data.username }</p>
                        <div className="flex flex-row justify-center gap-2 mt-5 sm:justify-start">
                            <label className="inline-flex px-2 py-1 text-xs border rounded-full">
                                <span> {`Creator of Nintrea`} </span>
                                <CheckIcon className="ml-1 size-4"/>
                            </label>
                            <label className="inline-flex px-2 py-1 text-xs border rounded-full">
                                <span> {`Author`} </span>
                                <CheckIcon className="ml-1 size-4"/>
                            </label>
                        </div>
                    </div>

                    <div className="flex flex-row justify-center gap-2 text-center sm:text-left sm:justify-start">
                        <p>Hello! I'm Least Sophat. I'm Web Front-End Developer and UIUX Designer @nintrea @uixbase</p>
                    </div>

                    <div className="flex flex-row justify-center gap-2 sm:justify-start">
                        <Button variant="outline" size="icon" className="rounded-full text-foreground/60 hover:text-foreground">
                            <GitHubLogoIcon className="size-4"/>
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full text-foreground/60 hover:text-foreground">
                            <InstagramLogoIcon className="size-4"/>
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full text-foreground/60 hover:text-foreground">
                            <FigmaLogoIcon className="size-4"/>
                        </Button>

                        <Button variant="outline" className="rounded-full sm:hidden">
                            <span> {`Follow`} </span>
                            <PlusIcon className="ml-1 size-4"/>
                        </Button>
                    </div>


                </div>

                <div className="absolute top-0 right-0 items-center justify-end hidden gap-2 sm:flex">
                    <Button variant="outline" title="Follow" className="rounded-full">
                        <span> {`Follow`} </span>
                        <PlusIcon className="ml-1 size-4"/>
                    </Button>
                    <Button variant="ghost" size="icon" title="Report" className="rounded-full text-background">
                        <InfoCircledIcon className="size-5"/>
                    </Button>
                </div>
            </div>
        </>
    )
}