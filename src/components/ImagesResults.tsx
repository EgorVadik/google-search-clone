'use client'

import { Schema$Search } from '@/types/SearchType'
import { useIntersection } from '@mantine/hooks'
import { useEffect, useRef, useState } from 'react'
import ImageCard from './ImageCard'
import Link from 'next/link'

type Props = {
    data: Schema$Search
    q: string
}

function ImagesResults({ data: initialData, q }: Props) {
    const [page, setPage] = useState<number>(2)
    const [data, setData] = useState<Schema$Search>(initialData)
    const lastImageRef = useRef<HTMLDivElement>(null)
    const { ref, entry } = useIntersection({
        root: lastImageRef.current,
        threshold: 1,
    })

    useEffect(() => {
        const handleLoadMore = async () => {
            const startIndex = page === 1 ? 1 : (page - 1) * 10 + 1

            try {
                const result = await fetch(
                    `/api/getImages?q=${q}&startIndex=${startIndex}`
                ).then((res) => res.json())

                return result as Schema$Search
            } catch (error) {
                return { items: undefined }
            }
        }

        if (entry === null) return
        if (entry.isIntersecting) {
            const loadMore = async () => {
                const images = await handleLoadMore()
                if (images.items === undefined) return
                setData((prev) => ({
                    ...prev,
                    items: [...prev.items!, ...images.items!],
                }))
                setPage((prev) => prev + 1)
            }
            loadMore()
        }
    }, [entry, page, q])

    useEffect(() => {
        setData(initialData)
    }, [initialData])

    return (
        <div className='grid grid-cols-auto-fit gap-4 p-5'>
            {data.items ? (
                data.items!.map((item, i) => {
                    if (i === data.items!.length - 2)
                        return (
                            <Link
                                ref={ref}
                                href={item.displayLink!}
                                key={item.link ?? item.image?.thumbnailLink}
                                className='group'
                            >
                                <ImageCard item={item} />
                            </Link>
                        )

                    return (
                        <Link
                            href={
                                'https://' +
                                item.displayLink
                                    ?.replaceAll('www.', '')
                                    .replaceAll('https://', '')
                            }
                            target='_blank'
                            key={item.link ?? item.image?.thumbnailLink}
                            className='group'
                        >
                            <ImageCard item={item} />
                        </Link>
                    )
                })
            ) : (
                <p>An Error Has Occured</p>
            )}
        </div>
    )
}

export default ImagesResults
