import Link from "next/link"

export default function MissingPage() {
    return (
        <main className="flex flex-col items-center justify-center gap-8 w-screen h-screen">
            <p>
                <span className="font-bold">404</span> - Page not found
            </p>
            <Link href="/" className="hover:underline hover:underline-offset-4 font-bold">
                ← Back to home
            </Link>
        </main>
    )
}
