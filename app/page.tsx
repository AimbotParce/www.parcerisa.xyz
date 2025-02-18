import KeepScrolling from "@/components/KeepScrolling"
import Image from "next/image"

export default function Home() {
    return (
        <main className="flex flex-col gap-8 w-full h-full items-center justify-center">
            <section className="flex flex-col gap-8 w-full h-screen items-center justify-center pb-16">
                <div className="flex gap-16 w-[66vw] h-[66vh] items-center justify-center overflow-hidden">
                    <Image
                        src="/profile.png"
                        alt="Profile Photo"
                        width={0}
                        height={0}
                        className="h-full w-auto"
                        unoptimized
                        loading="eager"
                        priority
                    />
                    <div className="flex flex-col gap-4">
                        <h1 className="text-6xl">Hi, I&apos;m Marc Parcerisa</h1>
                        <h2 className="text-2xl">An AI Engineer, Software Developer, Physicist and a Geek</h2>
                        <p className="text-lg text-justify">
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
            <section className="flex flex-col gap-8 w-[66vw] h-fit items-center justify-center">
                <h2 className="text-4xl">Projects</h2>
                <div className="w-full">
                    <a
                        className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-3xl"
                        target="_blank"
                        href="https://github.com/AimbotParce/BEC-Simulations"
                    >
                        BEC Simulations
                        <Image aria-hidden src="/new-window.svg" alt="New Window icon" width={20} height={20} />
                    </a>
                    <p className="text-lg text-justify">
                        For my physics degree thesis, I developed an easy-to-use simulator for Bose-Einstein Condensates
                        utilizing a GPU-accelerated system with JAX (by Google). As part of the project, I also designed
                        and implemented a web API to enable running simulations on the cloud, making the tool more
                        accessible and efficient for researchers and students.
                    </p>
                    <br />
                    <a
                        className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-3xl"
                        target="_blank"
                        href="https://github.com/AimbotParce/DnDWorldMapFrontend"
                    >
                        DnD Interactive World Map
                        <Image aria-hidden src="/new-window.svg" alt="New Window icon" width={20} height={20} />
                    </a>
                    <p className="text-lg text-justify">
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
                    </p>
                    <br />
                    <a
                        className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-3xl"
                        target="_blank"
                        href="https://github.com/AimbotParce/RAG-Learning"
                    >
                        RAG Learning
                        <Image aria-hidden src="/new-window.svg" alt="New Window icon" width={20} height={20} />
                    </a>
                    <p className="text-lg text-justify">
                        I am currently learning about the RAG (Retrieval-Augmented Generation) model, a new architecture
                        that combines the best of both worlds in NLP: retrieval-based and generation-based models. This
                        model is able to generate text by retrieving relevant information from a knowledge base, and
                        then generating text conditioned on that information. I have been experimenting with building a
                        simple book recommendation system using this model.
                    </p>
                    <br />
                    <a
                        className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-3xl"
                        target="_blank"
                        href="https://github.com/stars/AimbotParce/lists/data-science-master-s"
                    >
                        MSc in Data Science
                        <Image aria-hidden src="/new-window.svg" alt="New Window icon" width={20} height={20} />
                    </a>
                    <p className="text-lg text-justify">
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
                    </p>
                </div>
                <h2 className="text-4xl">Web pages</h2>
                <p className="text-lg text-justify w-full">
                    As well as working on personal projects, I love to create small web pages that solve everyday
                    problems, or that are just fun to use. Here are some of the web pages I&apos;ve created:
                </p>
                <div className="w-full">
                    <a
                        className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-3xl"
                        target="_blank"
                        href="/teamificator"
                    >
                        Teamificator
                        <Image aria-hidden src="/new-window.svg" alt="New Window icon" width={20} height={20} />
                    </a>
                    <p className="text-lg text-justify">
                        Create teams of as many people as you want with as many constrains as you need. Maybe you want
                        to distribute the seats in the work meeting, or maybe you want to create a balanced team for a
                        sports game. Teamificator will allow you to ensure that you sit next to your crush and you
                        don&apos;t have to talk to your boss.
                    </p>
                    <br />
                    <a
                        className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-3xl"
                        target="_blank"
                        href="/minecraft"
                    >
                        Minecraft Server Page
                        <Image aria-hidden src="/new-window.svg" alt="New Window icon" width={20} height={20} />
                    </a>
                    <p className="text-lg text-justify">
                        I have a Minecraft server with my friends, and I wanted to create a page where we could see the
                        server status, the players online, and manage the backups. I created a simple web page that
                        allows me to do just that using flask.
                    </p>
                    <br />
                    <a
                        className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-3xl"
                        target="_blank"
                        href="/london"
                    >
                        London Map
                        <Image aria-hidden src="/new-window.svg" alt="New Window icon" width={20} height={20} />
                    </a>
                    <p className="text-lg text-justify">
                        I visited London a few years ago, and loved it! The problem is that I have a terrible memory,
                        and wanted to visit as many iconic places as possible. The solution: create a map with all the
                        places I wanted to visit.
                    </p>
                </div>
                <h2 className="text-4xl">Studies</h2>
                <p className="text-lg text-justify w-full">
                    Finally, I tend to have a critical eye on the world around me, so here are some small studies
                    I&apos;ve done on different topics:
                </p>
                <div className="w-full">
                    <a
                        className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-3xl"
                        target="_blank"
                        href="https://github.com/AimbotParce/IncomeLevelStudy/blob/main/README.md"
                    >
                        Income Levels
                        <Image aria-hidden src="/new-window.svg" alt="New Window icon" width={20} height={20} />
                    </a>
                    <p className="text-lg text-justify">
                        Some time ago, I saw some kid on Tik Tok saying that there was no point in studying anything
                        because doing so wouldn&apos;t increase your income. I thought that was a pretty bold statement,
                        so I did what any reasonable person would do: I went to Kaggle to find a dataset that would help
                        me prove him wrong.
                    </p>
                </div>
            </section>

            <footer className="w-full row-start-3 flex gap-6 flex-wrap items-center justify-center sticky bottom-0 pb-16 pt-5 bg-black">
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
