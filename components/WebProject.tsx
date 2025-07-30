import Project from "./Project"

import Image from "next/image"

export default function WebProject({
    title,
    href,
    children,
}: {
    title: string
    href: string
    children: React.ReactNode
}) {
    return (
        <Project title={title} href={href}>
            <a href={href}>
                <Image
                    className="my-2 w-auto"
                    src={`https://img.shields.io/website?label=${encodeURIComponent(
                        href.replace("https://", "")
                    )}&url=${encodeURIComponent(
                        href
                    )}&up_message=up&up_color=brightgreen&down_message=down&down_color=red`}
                    alt="Website status badge"
                    height={10}
                    width={0}
                />
            </a>
            {children}
        </Project>
    )
}
