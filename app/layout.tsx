import type { Metadata } from "next"
import { Oswald } from "next/font/google"
import "./globals.css"

const font = Oswald({
    variable: "--font-geist-sans",
    subsets: ["latin"],
})

export const metadata: Metadata = {
    title: "Marc Parcerisa - Projects",
    description: "Marc Parcerisa's projects",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${font.variable} antialiased`}>{children}</body>
        </html>
    )
}
