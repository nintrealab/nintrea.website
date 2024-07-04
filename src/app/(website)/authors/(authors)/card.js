import { Skeleton } from "@/components/skeleton";
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image"
import Link from "next/link";

export const Card = ({ data }) => {
    return (
        <li className="flex col-span-1 gap-5 divide-gray-200 rounded-lg text-centerdivide-y">

            <div className="flex-shrink-0 p-5">
                <Image
                    width={250}
                    height={250}
                    className="flex-shrink-0 object-cover w-[13rem] aspect-[4/5] mx-auto rounded-lg"
                    src={`https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80`}
                    // src={data.image}
                    alt={data?.firstName +` `+ data?.lastName}
                />
            </div>
            <div className="flex flex-col items-start justify-start w-full py-5">
                <h3 className="text-lg font-medium leading-8 text-gray-900">{data?.firstName} {data?.lastName}</h3>
                <dl className="flex flex-col justify-between mt-1 text-card-foreground/70">
                    <dt className="sr-only">Name</dt>
                    <dd className="leading-7">{data?.company?.title}</dd>
                    <dt className="sr-only">Title</dt>
                    <dd className="mt-6 leading-7 line-clamp-3">{data?.userAgent}</dd>
                    <dt className="sr-only">Description</dt>
                    <dd className="flex items-center gap-3 mt-3 leading-7">
                        <Link href={`/`}>
                            <GitHubLogoIcon className="w-5 h-5" />
                        </Link>
                        <Link href={`/`}>
                            <LinkedInLogoIcon className="w-5 h-5" />
                        </Link>
                        <Link href={`/`}>
                            <InstagramLogoIcon className="w-5 h-5" />
                        </Link>
                        <Link href={`/`}>
                            <TwitterLogoIcon className="w-5 h-5" />
                        </Link>
                    </dd>
                </dl>
            </div>
        </li>
    )
}

export const LoadingCard = () => {

    return (
        <li className="flex col-span-1 gap-5 divide-gray-200 rounded-lg text-centerdivide-y">

            <div className="flex-shrink-0 p-5">
                <Skeleton className="w-[13rem] rounded-lg aspect-[4/5]" />
            </div>
            <div className="flex flex-col items-start justify-start w-full py-5">
                <Skeleton className="w-1/2 h-4 rounded-lg" />
                <Skeleton className="w-[13rem] rounded-lg h-3 mt-4" />
                <div className="flex flex-col justify-between w-full gap-3 mt-6 text-card-foreground/70">
                    <Skeleton className="w-full h-3 rounded-lg" />
                    <Skeleton className="w-full h-3 rounded-lg" />
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