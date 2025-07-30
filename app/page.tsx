import KeepScrolling from "@/components/KeepScrolling"
import Project from "@/components/Project"
import ProjectSection from "@/components/ProjectSection"
import WebProject from "@/components/WebProject"
import Image from "next/image"

export default function Home() {
    return (
        <main className="flex flex-col gap-8 w-full h-full items-center justify-center">
            <section className="flex flex-col gap-8 w-full min-h-screen items-center justify-center pb-16">
                <div className="flex gap-16 w-[66vw] min-h-[66vh] items-center justify-center overflow-hidden xl:flex-row flex-col">
                    <Image
                        src="/profile.png"
                        alt="Profile Photo"
                        width={0}
                        height={0}
                        className="h-full w-auto max-h-[66vh]"
                        unoptimized
                        loading="eager"
                        priority
                    />
                    <div className="flex flex-col gap-4">
                        <h1 className="text-5xl sm:text-6xl">Hi, I&apos;m Marc Parcerisa</h1>
                        <h2 className="text-xl sm:text-2xl">
                            An AI Engineer, Software Developer, Physicist and a Geek
                        </h2>
                        <p className="text-md sm:text-lg text-justify">
                            I&apos;m a physicist turned AI engineer and software developer. I&apos;ve worked on a
                            variety of projects, from quantum mechanics simulations to computer vision and natural
                            language processing. I&apos;m currently working for a computer vision company, and studying
                            Data Science. I&apos;m always looking for new challenges and opportunities to learn and
                            grow.
                        </p>
                    </div>
                </div>
                <KeepScrolling />
            </section>
            <section className="flex flex-col gap-28 w-[66vw] h-fit items-center justify-center">
                <ProjectSection title="Projects">
                    <Project href="https://github.com/AimbotParce/BEC-Simulations" title="BEC Simulations">
                        For my physics degree thesis, I developed an easy-to-use simulator for Bose-Einstein Condensates
                        utilizing a GPU-accelerated system with JAX (by Google). As part of the project, I also designed
                        and implemented a web API to enable running simulations on the cloud, making the tool more
                        accessible and efficient for researchers and students.
                    </Project>
                    <Project
                        href="https://github.com/AimbotParce/DnDWorldMapFrontend"
                        title="DnD Interactive World Map"
                    >
                        I sometimes play DnD with friends, and wanted to create an interactive world map that I could
                        project onto the table. To achieve this, I developed a web app that allows me to create and edit
                        maps, add creatures, and control both their movements and the visibility of different map
                        elements in real time. A{" "}
                        <a
                            className="hover:underline hover:underline-offset-4 text-blue-400"
                            target="_blank"
                            href="https://github.com/AimbotParce/DnDWorldMapBackend"
                        >
                            backend
                        </a>{" "}
                        server manages the game state and map data, while the{" "}
                        <a
                            className="hover:underline hover:underline-offset-4 text-blue-400"
                            target="_blank"
                            href="https://github.com/AimbotParce/DnDWorldMapFrontend"
                        >
                            frontend
                        </a>
                        , built with NextJS, enables seamless real-time updates for an immersive gameplay experience.
                    </Project>
                    <Project href="https://github.com/AimbotParce/RAG-Learning" title="RAG Learning">
                        I am currently learning about the RAG (Retrieval-Augmented Generation) model, a new architecture
                        that combines the best of both worlds in NLP: retrieval-based and generation-based models. This
                        model is able to generate text by retrieving relevant information from a knowledge base, and
                        then generating text conditioned on that information. I have been experimenting with building a
                        simple book recommendation system using this model.
                    </Project>
                    <Project
                        href="https://github.com/stars/AimbotParce/lists/data-science-master-s"
                        title="MSc in Data Science"
                    >
                        As part of my continuous learning journey, I am now studying for a MSc in Data Science. This
                        master&apos;s degree covers a wide range of topics, from machine learning and deep learning to
                        cloud computing and big data. It has a strong focus on practical applications and projects, so
                        be sure to check out my{" "}
                        <a
                            className="hover:underline hover:underline-offset-4 text-blue-400"
                            target="_blank"
                            href="https://github.com/stars/AimbotParce/lists/data-science-master-s"
                        >
                            compiled list of MDS projects
                        </a>{" "}
                        on GitHub.
                    </Project>
                </ProjectSection>
                <ProjectSection
                    title="Web pages"
                    description="As well as working on personal projects, I love to create small web pages that solve 
                    everyday problems, or that are just fun to use. Here are some of the web pages I've created:"
                >
                    <WebProject title="Shared Flat Tracker" href="https://sft.parcerisa.xyz">
                        I needed a way to collaboratively track all the flats that two colleagues and I found over the
                        internet, to rent during the 2025-2026 academic year. So, I quickly spun up a web application
                        using NextJS + Prisma to expose and interact with a PostgreSQL database, which I hosted on my
                        Proxmox home lab. The page is still in a very early stage, so make sure to keep an eye on its{" "}
                        <a
                            className="hover:underline hover:underline-offset-4 text-blue-400"
                            target="_blank"
                            href="https://github.com/AimbotParce/SharedFlatTracker"
                        >
                            GitHub repository
                        </a>{" "}
                        if you want to see the progress.
                    </WebProject>
                    <WebProject title="Teamificator" href="https://london.parcerisa.xyz">
                        Create teams of as many people as you want with as many constrains as you need. Maybe you want
                        to distribute the seats in the work meeting, or maybe you want to create a balanced team for a
                        sports game. Teamificator will allow you to ensure that you sit next to your crush and you
                        don&apos;t have to talk to your boss. This web page is currently being developed. You can keep
                        an eye on its{" "}
                        <a
                            className="hover:underline hover:underline-offset-4 text-blue-400"
                            target="_blank"
                            href="https://github.com/AimbotParce/teamificator.parcerisa.xyz"
                        >
                            GitHub repository
                        </a>{" "}
                        if you want to see the progress.
                    </WebProject>
                    <WebProject href="https://mc.parcerisa.xyz" title="Minecraft Server Page">
                        I have a Minecraft server with my friends, and I wanted to create a page where we could see the
                        server status, the players online, and manage the backups. I created a simple web page that
                        allows me to do just that using flask.
                    </WebProject>
                    <WebProject title="London Map" href="https://london.parcerisa.xyz">
                        I visited London a few years ago, and loved it! The problem is that I have a terrible memory,
                        and wanted to visit as many iconic places as possible. The solution: create a map with all the
                        places I wanted to visit.
                    </WebProject>
                </ProjectSection>
                <ProjectSection
                    title="Studies"
                    description="Finally, I tend to have a critical eye on the world around me, so here are some small
                    studies I've done on different topics:"
                >
                    <Project
                        href="https://github.com/AimbotParce/IncomeLevelStudy/blob/main/README.md"
                        title="Income Levels"
                    >
                        Some time ago, I saw some kid on Tik Tok saying that there was no point in studying anything
                        because doing so wouldn&apos;t increase your income. I thought that was a pretty bold statement,
                        so I did what any reasonable person would do: I went to Kaggle to find a dataset that would help
                        me prove him wrong.
                    </Project>
                </ProjectSection>
            </section>

            <footer className="w-full row-start-3 flex gap-6 flex-wrap items-center justify-center sm:sticky sm:bottom-0 px-8 pb-16 sm:pb-4 xl:pb-16 pt-5 bg-black">
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://www.github.com/AimbotParce"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image aria-hidden src="/github.svg" alt="File icon" width={16} height={16} />
                    Checkout my GitHub
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://www.linkedin.com/in/marc-parcerisa/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image aria-hidden src="/linkedin.svg" alt="Window icon" width={16} height={16} />
                    Connect with me
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="mailto:marcparcerisa@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image aria-hidden src="/at-symbol.svg" alt="Globe icon" width={16} height={16} />
                    Contact me via email
                </a>
            </footer>
        </main>
    )
}
