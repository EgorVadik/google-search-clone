'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Tooltip from './Tooltip'
import { useRouter } from 'next/navigation'

type SearchBarProps = {
    search: string
    setSearch: (search: string) => void
}

function SearchBar({ search, setSearch }: SearchBarProps) {
    const router = useRouter()
    const textareaRef = useRef<HTMLTextAreaElement>(null)
    const divRef = useRef<HTMLDivElement>(null)
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
            className='w-auto min-h-[46px] relative border dark:border-[#5f6368] border-[#dfe1e5] rounded-3xl max-h-[240px] dark:hover:bg-[#303134] dark:hover:border-black/0 hover:border-[#dfe1e500] dark:hover:shadow-search-bar hover:shadow-search-bar-light dark:focus-within:bg-[#303134] dark:focus-within:border-black/0 focus-within:border-[#dfe1e500] dark:focus-within:shadow-search-bar focus-within:shadow-search-bar-light duration-100 px-10 flex items-center'
        >
            <Image
                src='/search-icon.svg'
                className='absolute top-[10px] left-3'
                alt='Search'
                width={24}
                height={24}
            />

            {search.length > 0 && (
                <div className='absolute top-[10px] right-3 h-6'>
                    <Tooltip text='Clear'>
                        <button onClick={() => setSearch('')}>
                            <svg
                                focusable='false'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 24 24'
                                className=''
                                fill='#9aa0a6'
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
                className='w-full resize-none outline-none bg-inherit dark:text-[#e8eaed] text-[#000000de] max-h-[240px]'
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
                        router.push(`/search?q=${search}`)
                    }
                }}
            />
        </div>
    )
}

export default SearchBar
