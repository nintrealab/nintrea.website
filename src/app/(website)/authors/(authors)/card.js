import { Button } from "@/components/button";
import { LinkComponent } from "@/components/link-button";
import { Skeleton } from "@/components/skeleton";
import { CheckIcon, FigmaLogoIcon, GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, PlusIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image"
import Link from "next/link";

export const Card = ({ data }) => {
    return (
        <article className="relative flex flex-col h-full col-span-1 gap-0 divide-gray-200 rounded-lg text-centerdivide-y">
            <div className="relative w-full p-5 pb-2.5">
                <div className="sm:hidden inset-0 sm:p-5 overflow-hidden -z-[2]">
                    <Image
                        width={250}
                        height={250}
                        className="flex-shrink-0 absolute -z-[2] object-cover w-32 h-full top-0 left-1/2 -translate-x-1/2 blur-xl opacity-50 aspect-square rounded-full inset-2 brightness-125"
                        src={data.src}
                        // src={data.image}
                        alt={data?.title}
                    />
                </div>
                <Image
                    width={250}
                    height={250}
                    className="flex-shrink-0 object-cover sm:w-full w-20 aspect-square drop-shadow-sm sm:aspect-[5/3] mx-auto rounded-full sm:rounded-lg"
                    src={data.src}
                    // src={data.image}
                    alt={data?.title}
                />
                <div className="z-10 flex flex-row justify-center gap-2 -mt-1 sm:hidden sm:flex-wrap sm:flex-row sm:justify-start">
                    {data.roles.slice(0,1).map((role, index) => {
                        return (
                            <p key={index} className="inline-flex text-xs bg-background/90 backdrop-blur-sm items-center whitespace-nowrap leading-5 px-2 py-0.5 text-[12px] border rounded-full">
                                <span> {role.title} </span>
                                { role.verified && ( <CheckIcon className="ml-1 size-4"/> ) }
                            </p>
                        )
                    })}
                </div>
                <Button title="Follow" size="icon" className="absolute hidden px-3 mx-auto mt-2 text-xs leading-4 rounded-full sm:flex bg-background text-foreground -bottom-2 right-6">
                    {/* <span className="leading-5"> {`Follow`} </span> */}
                    <PlusIcon className="leading-5 shrink-0 size-4"/>
                </Button>
            </div>
            <div className="flex flex-col items-start justify-start w-full pt-0 px-2 sm:p-5 sm:pt-2.5 pb-5">
                <h2 className="mx-auto text-sm font-medium leading-8 sm:text-lg sm:ml-0 line-clamp-1 text-foreground">
                    <Link href={data?.username}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {data?.title}
                    </Link>
                </h2>
                <dl className="flex flex-col justify-between w-full mt-1 text-card-foreground/70">
                    <dt className="sr-only">Name</dt>
                    <dd className="leading-7">
                        <div className="flex-row justify-center hidden gap-2 mt-3 sm:flex sm:flex-wrap sm:flex-row sm:justify-start">
                            {data.roles.slice(0,2).map((role, index) => {
                                return (
                                    <p key={index} className="inline-flex items-center whitespace-nowrap leading-5 px-2 py-0.5 text-[12px] border rounded-full">
                                        <span> {role.title} </span>
                                        { role.verified && ( <CheckIcon className="ml-1 size-4"/> ) }
                                    </p>
                                )
                            })}
                        </div>
                    </dd>
                    <dt className="sr-only">Title</dt>
                    <Button className="px-5 py-0 mx-auto mt-2 text-xs leading-4 rounded-full w-fit sm:hidden">
                        <span className="leading-5"> {`Follow`} </span>
                        <PlusIcon className="ml-1 leading-5 size-4"/>
                    </Button>
                    <dd className="z-10 items-center justify-center hidden w-full gap-3 mt-3 leading-7 pointer-events-none sm:flex sm:justify-start">
                        {
                            data?.github && <LinkComponent href={data?.github} target={'_blank'}>
                                <GitHubLogoIcon className="size-4"/>
                            </LinkComponent>
                        }
                        {
                            data?.instagram && <LinkComponent href={data?.instagram} target={'_blank'}>
                                <InstagramLogoIcon className="size-4"/>
                            </LinkComponent>
                        }
                        {
                            data?.figma && <LinkComponent href={data?.figma} target={'_blank'}>
                                <FigmaLogoIcon className="size-4"/>
                            </LinkComponent>
                        }
                        {
                            data?.linkedin && <LinkComponent href={data?.linkedin} target={'_blank'}>
                                <LinkedInLogoIcon className="size-4"/>
                            </LinkComponent>
                        }
                    </dd>
                </dl>
            </div>
        </article>
    )
}

export const LoadingCard = () => {

    return (
        <li className="flex flex-col col-span-1 p-5 divide-gray-200 rounded-lg gap-7 text-centerdivide-y">

            <div className="flex-shrink-0 ">
                <Skeleton className="w-full rounded-lg aspect-[5/3]" />
            </div>
            <div className="flex flex-col items-start justify-start w-full">
                <Skeleton className="w-1/2 h-4 rounded-lg" />
                <div className="flex flex-col justify-between w-full gap-3 mt-3 text-card-foreground/70">
                    <Skeleton className="w-1/2 h-3 rounded-lg" />
                    <div className="flex items-center gap-3 mt-6 leading-7">
                        <Skeleton className="w-8 h-8 rounded-lg" />
                        <Skeleton className="w-8 h-8 rounded-lg" />
                        <Skeleton className="w-8 h-8 rounded-lg" />
                    </div>
                </div>
            </div>
        </li>
    )
}