import { Schema$Result } from '@/types/SearchType'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
    item: Schema$Result
}

function ResultCard({ item }: Props) {
    const splitedLink = item.link?.split('/')
    const pages =
        splitedLink?.length! > 3
            ? splitedLink![3] !== ''
                ? ' > ' + splitedLink?.slice(3).join(' > ')
                : ''
            : ''
    const link = splitedLink!.slice(0, 3).join('/') + pages

    return (
        <div>
            <Link href={item.link!}>
                <p className='dark:text-[#bdc1c6] text-[#4d5156] text-xs'>
                    {link}
                </p>
                <p className='dark:text-[#8ab4f8] text-[#1a0dab] text-xl hover:underline'>
                    {item.title}
                </p>
            </Link>
            <div
                className='dark:text-[#bdc1c6] text-[#4d5156]'
                dangerouslySetInnerHTML={{ __html: item.htmlSnippet! }}
            />
        </div>
    )
}

export default ResultCard
