import Link from "next/link"

export default function MissingForwardedPage() {
    return (
        <main className="flex flex-col items-center justify-center gap-8 w-screen h-screen">
            <p>
                You should have been forwarded to web page, but this might be under construction or not yet available.
            </p>
            <Link href="/" className="hover:underline hover:underline-offset-4 font-bold">
                Go back
            </Link>
        </main>
    )
}
