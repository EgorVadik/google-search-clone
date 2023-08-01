'use client'

import { useEffect, useRef, useState } from 'react'
import Tooltip from './Tooltip'
import { useRouter, useSearchParams } from 'next/navigation'

type Props = {
    pathName: string
}

function SearchBarNav({ pathName }: Props) {
    const router = useRouter()
    const textareaRef = useRef<HTMLTextAreaElement>(null)
    const divRef = useRef<HTMLDivElement>(null)
    const val = useSearchParams()
    const [search, setSearch] = useState(val.get('q') ?? '')

    useEffect(() => {
        if (divRef.current === null) return
        if (textareaRef.current === null) return

        const div = divRef.current
        const textarea = textareaRef.current

        textarea.style.height = 'auto'
        textarea.style.height = textarea.scrollHeight + 'px'

        div.style.height = 'auto'
        div.style.height = textarea.scrollHeight + 10 + 'px'
    }, [search])

    return (
        <div
            ref={divRef}
            className='max-w-[600px] mr-10 w-full min-h-[46px] relative border border-transparent dark:border-[#303134] rounded-3xl max-h-[240px] dark:bg-[#303134] dark:shadow-search-bar-nav shadow-search-bar-nav-light duration-100 pl-5 pr-[68px] flex items-center dark:hover:shadow-search-bar-nav-hover hover:shadow-search-bar-nav-light-hover focus-within:shadow-search-bar-nav-light-hover dark:hover:border-black/0 focus-within:dark:shadow-search-bar-nav-hover focus-within:dark:border-black/0'
        >
            <div className='absolute top-[10px] right-3'>
                <Tooltip text='Search'>
                    <button
                        onClick={(e) => {
                            if (search.trim() !== '') {
                                e.preventDefault()
                                if (pathName === '/search')
                                    router.push(`/search?q=${search}`)
                                else router.push(`/search/images?q=${search}`)
                                router.refresh()
                            }
                        }}
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 -960 960 960'
                            focusable='false'
                            className='fill-[#4285f4] dark:fill-[#8ab4f8]'
                            width={24}
                            height={24}
                        >
                            <path d='M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Z' />
                        </svg>
                    </button>
                </Tooltip>
            </div>

            <div className='w-px h-[30px] absolute top-[7px] right-10 bg-[#dadce0] dark:bg-[#5f6368]' />
            {search.length > 0 && (
                <div className='absolute top-[10px] right-12 h-6'>
                    <Tooltip text='Clear'>
                        <button onClick={() => setSearch('')}>
                            <svg
                                focusable='false'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 24 24'
                                className='fill-[#70757a] dark:fill-[#9aa0a6]'
                                width={24}
                                height={24}
                            >
                                <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'></path>
                            </svg>
                        </button>
                    </Tooltip>
                </div>
            )}
            <textarea
                ref={textareaRef}
                className='w-full resize-none outline-none bg-inherit dark:text-[#e8eaed] text-[#202124] max-h-[240px]'
                rows={1}
                value={search}
                onChange={(e) => {
                    if (
                        !(e.target.value.trim() === '' && search.length === 0)
                    ) {
                        setSearch(e.target.value)
                    }
                }}
                onKeyDown={(e) => {
                    if (e.shiftKey && e.key === 'Enter') return

                    if (e.key === 'Enter' && search.trim() !== '') {
                        e.preventDefault()
                        if (pathName === '/search')
                            router.push(`/search?q=${search}`)
                        else router.push(`/search/images?q=${search}`)
                        router.refresh()
                    }
                }}
            />
        </div>
    )
}

export default SearchBarNav
