'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

function FooterCountry() {
    const [country, setCountry] = useState('Loading...')
    const [city, setCity] = useState('Loading...')
    const pathname = usePathname()

    useEffect(() => {
        fetch(
            `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_LOOKUP_KEY}`
        )
            .then((res) => {
                return res.json()
            })
            .then((result) => {
                setCity(result.city)
                setCountry(result.country)
            })
    }, [])

    return (
        <div
            className={`flex gap-3 dark:text-[#bdc1c6] text-[#70757a] ${
                pathname !== '/' ? 'pt-[15px]' : 'py-[15px]'
            }  px-[30px] border-b dark:border-b-[#3c4043] border-b-[#dadce0] text-[15px]`}
        >
            <div>{country}</div>
            {pathname !== '/' && (
                <>
                    <div className='bg-[#3c4043] w-px h-[30px]' />
                    <div className='font-bold dark:text-[#bdc1c6] text-[#4d5156]'>
                        {city}
                    </div>
                </>
            )}
        </div>
    )
}

export default FooterCountry
