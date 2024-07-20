import { LinkComponent } from "@/components/link-button";
import { Skeleton } from "@/components/skeleton";
import { CheckIcon, FigmaLogoIcon, GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image"
import Link from "next/link";

export const Card = ({ data }) => {
    return (
        <article className="relative flex flex-col h-full col-span-1 gap-0 divide-gray-200 rounded-lg text-centerdivide-y">
            <div className="w-full p-5 pb-2.5">
                <Image
                    width={250}
                    height={250}
                    className="flex-shrink-0 object-cover w-full aspect-[5/3] mx-auto rounded-lg"
                    src={data.src}
                    // src={data.image}
                    alt={data?.title}
                />
            </div>
            <div className="flex flex-col items-start justify-start w-full p-5 pt-2.5 pb-5">
                <h2 className="text-lg font-medium leading-8 text-foreground">
                    <Link href={data?.username}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {data?.title}
                    </Link>
                </h2>
                <dl className="flex flex-col justify-between mt-1 text-card-foreground/70">
                    <dt className="sr-only">Name</dt>
                    <dd className="leading-7">
                        <div className="flex flex-row flex-wrap justify-center gap-2 mt-1 sm:justify-start">
                            {data.roles.map((role, index) => {
                                return (
                                    <p key={index} className="inline-flex items-center leading-5 px-2 py-0.5 text-[12px] border rounded-full">
                                        <span> {role.title} </span>
                                        { role.verified && ( <CheckIcon className="ml-1 size-4"/> ) }
                                    </p>
                                )
                            })}
                        </div>
                    </dd>
                    <dt className="sr-only">Title</dt>
                    <dd className="z-10 flex items-center gap-3 mt-3 leading-7 pointer-events-none">
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