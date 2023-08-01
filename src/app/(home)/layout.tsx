import '../globals.css'
import type { Metadata } from 'next'
import HtmlWrapper from '@/components/HtmlWrapper'

export const metadata: Metadata = {
    title: 'Google',
    description:
        'Google Search clone made with Next.js and TailwindCSS by @egorvadik',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <HtmlWrapper>{children}</HtmlWrapper>
}
