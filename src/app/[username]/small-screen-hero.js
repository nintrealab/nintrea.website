import { Button } from "@/components/button"
import { LinkComponent } from "@/components/link-button"
import { CheckBadgeIcon, CheckCircleIcon } from "@heroicons/react/20/solid"
import { CheckIcon, DividerVerticalIcon, FigmaLogoIcon, GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, PlusIcon } from "@radix-ui/react-icons"
import Image from "next/image"

export const SmallScreenHero = ({ data = {} }) => {
    return(
        <>
            <div className="relative w-full sm:hidden">
                <div className="z-40 flex flex-col justify-center w-full gap-3 px-5 sm:mt-12">
                    <div className="absolute flex flex-row justify-center gap-2 top-3 right-5 sm:justify-start">
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
                    </div>
                    <div className="relative flex items-end justify-center gap-3 mt-20 sm:justify-start sm:mt-0 sm:ml-0">

                        <div className="relative">
                            <Image
                                src={ data?.src }
                                alt={ `${ data?.title } profile picture` }
                                width="200"
                                height="200"
                                className="border-4 rounded-full border-background ring-2 ring-inset ring-border size-24 sm:size-32 drop-shadow sm:rounded-3xl"
                            />
                            { data?.verified && <CheckBadgeIcon className="absolute rounded-full bg-background bottom-1.5 right-0.5 size-6 text-sky-600 sm:hidden"/> }
                        </div>

                    </div>

                    <div className="flex flex-col items-center justify-center gap-0">
                        <h1 className="flex items-center justify-center gap-2 text-xl font-semibold tracking-tight text-center sm:text-left w-fit sm:text-3xl sm:justify-start text-primary">
                            <span className="relative w-full">
                                { data?.title }
                                {/* { data?.verified && <CheckBadgeIcon className="absolute top-1.5 -right-6 sm:-right-7 size-5 sm:size-6 text-sky-600"/> } */}
                            </span>
                        </h1>
                        <p className="text-sm text-center text-foreground/70 font-ubuntu">
                            <span>{ data?.username }</span>
                            <span>{` • `}</span>
                            <span className="font-sans">{ data?.joined }</span>
                        </p>
                    </div>
                    <div className="inline-flex items-center justify-center gap-2 text-center sm:text-left text-foreground/90">
                        <div className="flex flex-row justify-center gap-2 mt-1 sm:justify-start">
                            {
                                data?.roles.map((role, index) => {
                                    return (
                                        <p key={ index } className="inline-flex px-2 py-1 text-xs border rounded-full text-foreground/50">
                                            <span> { role?.title } </span>
                                            { role?.verified && <CheckIcon className="ml-1 size-4"/> }
                                        </p>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-3 py-4 rounded-xl">
                        <div>
                            <p className="font-sans text-lg font-semibold text-center">10</p>
                            <p className="font-sans text-sm text-left">Followers</p>
                        </div>
                        <div className="flex">
                            <DividerVerticalIcon className="h-full text-foreground/20"/>
                        </div>
                        <div>
                            <p className="font-sans text-lg font-semibold text-center">3</p>
                            <p className="font-sans text-sm text-left">Following</p>
                        </div>
                        <div className="flex">
                            <DividerVerticalIcon className="h-full text-foreground/20"/>
                        </div>
                        <div>
                            <Button variant="outline" className="px-3 py-0 text-xs leading-4 rounded-full sm:hidden">
                                <span className="leading-5"> {`Follow`} </span>
                                <PlusIcon className="ml-1 leading-5 size-4"/>
                            </Button>
                        </div>
                    </div>

                    <div className="flex flex-row justify-center gap-2 text-sm text-center sm:text-base sm:text-left sm:justify-start">
                        <p className="[&>a]:text-primary [&>a]:leading-5" dangerouslySetInnerHTML={{ __html: data?.description }}></p>
                    </div>
                </div>
            </div>
        </>
    )
}