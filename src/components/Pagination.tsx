'use client'

import { usePagination } from '@mantine/hooks'
import { useRouter, useSearchParams } from 'next/navigation'

function Pagination() {
    const _urlPageNum = useSearchParams().get('page')
    const q = useSearchParams().get('q')
    const urlPageNum = parseInt(_urlPageNum ?? '1')
    const router = useRouter()

    const { active, next, previous, setPage } = usePagination({
        total: 10,
        initialPage: urlPageNum,

        onChange: (page) => {
            // const startIndex = urlPageNum === 1 ? 1 : (urlPageNum - 1) * 10 + 1
            router.push(`/search?q=${q}&page=${page}`)

            console.log(page)
        },
    })

    return (
        <div className='flex items-center justify-center pt-16 gap-7'>
            {active !== 1 && (
                <button
                    className='dark:text-[#8ab4f8] hover:underline'
                    onClick={previous}
                >
                    Previous
                </button>
            )}
            <div>
                {new Array(10).fill('-').map((_, i) => {
                    return (
                        <button
                            key={i + 1}
                            onClick={() => setPage(i + 1)}
                            disabled={i + 1 === active}
                            className={`px-2 py-1 rounded ${
                                i + 1 === active
                                    ? 'dark:text-[#bdc1c6]'
                                    : 'dark:text-[#8ab4f8] hover:underline'
                            }`}
                        >
                            {i + 1}
                        </button>
                    )
                })}
            </div>
            {active !== 10 && (
                <button
                    className='dark:text-[#8ab4f8] hover:underline flex flex-col'
                    onClick={next}
                >
                    Next
                </button>
            )}
        </div>
    )
}

export default Pagination
