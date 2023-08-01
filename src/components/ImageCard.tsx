import { Schema$Result } from '@/types/SearchType'
import Image from 'next/image'

type Props = {
    item: Schema$Result
}

function ImageCard({ item }: Props) {
    return (
        <>
            <Image
                src={`${item.link ?? item.image?.thumbnailLink}`}
                alt={item.title!}
                width={item.image?.width}
                height={item.image?.height}
                className='w-full object-cover aspect-video rounded-t group-hover:opacity-75 duration-200 group-hover:scale-105'
            />
            <div className='dark:text-[#bdc1c6] text-xs py-1'>
                <p>
                    {item.displayLink
                        ?.replaceAll('www.', '')
                        .replaceAll('https://', '')}
                </p>
                <h3 className='truncate dark:text-[#bdc1c6] text-sm'>
                    {item.title}
                </h3>
            </div>
        </>
    )
}

export default ImageCard
