import HtmlWrapperSearch from '@/components/HtmlWrapperSearch'
import '../globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Google',
    description:
        'Google Search clone made with Next.js and TailwindCSS by @egorvadik',
}

export default function SearchLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <HtmlWrapperSearch>{children}</HtmlWrapperSearch>
}
