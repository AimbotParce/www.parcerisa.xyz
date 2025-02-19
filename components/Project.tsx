import Image from "next/image"

export default function Project({
    title,
    href,
    children,
}: {
    title: string
    href?: string
    children: React.ReactNode
}) {
    return (
        <div>
            {href !== undefined ? (
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-3xl"
                    target="_blank"
                    href={href}
                >
                    {title}
                    <Image aria-hidden src="/new-window.svg" alt="New Window icon" width={20} height={20} />
                </a>
            ) : (
                <h3 className="text-3xl">{title}</h3>
            )}
            <p className="text-lg text-justify mt-1">{children}</p>
        </div>
    )
}
