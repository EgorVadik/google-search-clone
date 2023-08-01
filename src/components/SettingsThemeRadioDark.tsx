'use client'

import { useLocalStorage } from '@mantine/hooks'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

function SettingsThemeRadioDark() {
    const [darkTheme, setDarkTheme] = useLocalStorage({
        key: 'dark-theme',
        defaultValue: true,
    })
    const radioRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (radioRef.current === null) return
        if (darkTheme) radioRef.current.checked = true
        else radioRef.current.checked = false
    }, [darkTheme])

    return (
        <>
            <input
                id={'Dark'}
                ref={radioRef}
                type='radio'
                name='theme'
                className='peer/dark sr-only'
                onChange={() => {
                    setDarkTheme(true)
                    console.log('dark')
                }}
            />
            <label
                htmlFor={'Dark'}
                className='flex items-center dark:text-[#bdc1c6] text-[#4d5156] px-6 cursor-pointer py-1 hover:bg-[#f1f3f4] dark:hover:bg-[#303134] before:content-[""] before:rounded-full before:border-2 before:border-[#bdc1c6] before:w-4 before:h-4 peer-checked/dark:before:border-[#8ab4f8] peer-checked/dark:before:bg-[#8ab4f8]'
            >
                <p className='text-sm ml-3 mr-auto'>Dark theme</p>
                <Image
                    src={
                        'https://www.gstatic.com/ui/v1/menu/dark_thumbnail2.png'
                    }
                    width={66}
                    height={30}
                    alt='theme'
                />
            </label>
        </>
    )
}

export default SettingsThemeRadioDark
