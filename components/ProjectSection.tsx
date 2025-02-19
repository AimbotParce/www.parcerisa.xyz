export default function ProjectSection({
    title,
    description,
    children,
}: {
    title: string
    description?: string
    children: React.ReactNode
}) {
    return (
        <div className="w-full flex flex-col gap-16">
            <div>
                <h2 className="text-4xl text-center">{title}</h2>
                {description !== undefined && <p className="text-lg text-justify w-full mt-2">{description}</p>}
            </div>
            {children}
        </div>
    )
}
