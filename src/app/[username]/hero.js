import { Button } from "@/components/button"
import { LinkComponent } from "@/components/link-button"
import { Logo } from "@/components/logo"
import { CheckBadgeIcon, CheckCircleIcon } from "@heroicons/react/20/solid"
import { CheckCircledIcon, CheckIcon, FigmaLogoIcon, GitHubLogoIcon, InfoCircledIcon, InstagramLogoIcon, LinkedInLogoIcon, PlusIcon } from "@radix-ui/react-icons"
import Image from "next/image"
import Link from "next/link"

export const ProfileHero = ({ data = {} }) => {
    return(
        <>
            <div className="relative w-full">
                <div className="z-40 flex flex-col justify-center w-full gap-5 mt-10 sm:mt-12">
                    <div className="flex items-center mx-auto sm:ml-0">
                        <Image
                            src={ data?.src }
                            alt={ `${ data?.title } profile picture` }
                            width="100"
                            height="100"
                            className=" ring-2 ring-inset ring-border size-24 sm:size-32 drop-shadow rounded-3xl"
                        />
                    </div>
                    <div className="flex flex-col mx-auto sm:ml-0 ">
                        <p className="text-center sm:text-left">{ data?.username }</p>

                        <div className="flex items-center justify-center w-full gap-2 sm:justify-start">
                            <h1 className="flex items-center justify-center gap-2 text-2xl font-extrabold tracking-tight text-center sm:text-left w-fit sm:text-3xl sm:justify-start text-primary">
                                <span className="relative w-full">
                                    { data?.title }
                                    { data?.verified && <CheckBadgeIcon className="absolute top-1.5 -right-6 sm:-right-7 size-5 sm:size-6 text-sky-600"/> }
                                </span>
                            </h1>
                        </div>

                        <div className="inline-flex items-center gap-2 mt-1 text-center sm:text-left text-foreground/90">
                            <div className="flex flex-row justify-center gap-2 mt-1 sm:justify-start">
                                {
                                    data?.roles.map((role, index) => {
                                        return (
                                            <p key={ index } className="inline-flex px-2 py-1 text-xs border rounded-full">
                                                <span> { role?.title } </span>
                                                { role?.verified && <CheckIcon className="ml-1 size-4"/> }
                                            </p>
                                        )
                                    })
                                }
                            </div>
                        </div>

                    </div>

                    <div className="flex flex-row justify-center gap-2 text-sm text-center sm:text-base sm:text-left sm:justify-start">
                        <p className="[&>a]:text-primary" dangerouslySetInnerHTML={{ __html: data?.description }}></p>
                    </div>

                    <div className="flex flex-row justify-center gap-2 sm:justify-start">
                        {
                            data?.github && <LinkComponent href={data?.github} target={'_blank'} aria-label="Github">
                                <GitHubLogoIcon className="size-4"/>
                            </LinkComponent>
                        }
                        {
                            data?.instagram && <LinkComponent href={data?.instagram} target={'_blank'} aria-label="Instagram">
                                <InstagramLogoIcon className="size-4"/>
                            </LinkComponent>
                        }
                        {
                            data?.figma && <LinkComponent href={data?.figma} target={'_blank'} aria-label="Figma">
                                <FigmaLogoIcon className="size-4"/>
                            </LinkComponent>
                        }
                        {
                            data?.linkedin && <LinkComponent href={data?.linkedin} target={'_blank'} aria-label="LinkedIn">
                                <LinkedInLogoIcon className="size-4"/>
                            </LinkComponent>
                        }

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