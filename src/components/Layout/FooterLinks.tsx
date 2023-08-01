import Link from 'next/link'

type FooterLinksProps = {
    href: string
    text: string
}

function FooterLinks({ href, text }: FooterLinksProps) {
    return (
        <Link
            href={href}
            className='dark:text-[#bdc1c6] text-[#70757a] hover:underline'
        >
            {text}
        </Link>
    )
}

export default FooterLinks
