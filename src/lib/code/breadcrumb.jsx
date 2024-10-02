import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export function BreadcrumbPost({ breadcrumbs }) {
    return (
        <Breadcrumb>
            <BreadcrumbList className="p-1 px-2 -translate-x-2 rounded-md bg-background/50 backdrop-blur-sm w-fit">
                {breadcrumbs && breadcrumbs.map((breadcrumb, k) => (
                    <div key={k} className="flex items-center gap-1">
                        <BreadcrumbItem>
                            {breadcrumbs.length !== k + 1 ? (
                                <BreadcrumbLink href={breadcrumb.route}>
                                    {breadcrumb.title}
                                </BreadcrumbLink>
                            ) : (
                                <span className="leading-6 text-primary">
                                    {breadcrumb.title}
                                </span>
                            )}
                        </BreadcrumbItem>
                        {breadcrumbs.length !== k + 1 && <BreadcrumbSeparator />}
                    </div>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    )
}
