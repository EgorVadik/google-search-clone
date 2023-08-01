'use client'

import SearchBar from '@/components/SearchBar'
import Image from 'next/image'
import { faker } from '@faker-js/faker'
import { FormEvent, MouseEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useLocalStorage } from '@mantine/hooks'

export default function Home() {
    const router = useRouter()
    const [search, setSearch] = useState('')
    const [darkTheme] = useLocalStorage({
        key: 'dark-theme',
        defaultValue: true,
    })

    const handleSearchChange = (search: string) => {
        setSearch(search)
    }

    const handleRandomSearch = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const fakerWords = faker.rawDefinitions.word
        if (fakerWords) {
            const typeIndex = Math.floor(
                Math.random() * Object.keys(fakerWords).length
            )
            const randomType = Object.keys(fakerWords)[typeIndex]
            const wordIndex = Math.floor(
                Math.random() * (fakerWords[randomType] as string[]).length
            )
            const randomWord = (fakerWords[randomType] as string[])[wordIndex]
            router.push(`/search?q=${randomWord}`)
        }
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (search.trim().length === 0) return
        router.push(`/search?q=${search}`)
    }

    return (
        <main className='flex flex-col items-center justify-between px-5 md:px-0'>
            <form
                onSubmit={handleSubmit}
                className='flex flex-col gap-8 max-w-[584px] w-full'
            >
                <Image
                    src={`${
                        darkTheme ? '/google-dark.png' : '/google-light.webp'
                    }`}
                    className='m-auto'
                    alt='Google'
                    width={272}
                    height={92}
                />

                <SearchBar search={search} setSearch={handleSearchChange} />

                <div className='flex gap-3 items-center justify-center text-sm text-[#e8eaed]'>
                    <button
                        className='dark:bg-[#303134] bg-[#f8f9fa] text-[#202124] dark:text-white select-none px-4 py-2 rounded dark:hover:border-[#5f6368] hover:border-[#dadce0] border dark:border-[#303134] border-[#f8f9fa]'
                        type='submit'
                    >
                        Google Search
                    </button>
                    <button
                        className='dark:bg-[#303134] bg-[#f8f9fa] text-[#202124] dark:text-white select-none px-4 py-2 rounded dark:hover:border-[#5f6368] hover:border-[#dadce0] border dark:border-[#303134] border-[#f8f9fa]'
                        onClick={handleRandomSearch}
                    >
                        {"I'm"} Feeling Lucky
                    </button>
                </div>
            </form>
        </main>
    )
}
