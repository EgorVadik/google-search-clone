import Link from 'next/link'
import Tooltip from '../Tooltip'
import Image from 'next/image'
import SearchBarNav from '../SearchBarNav'
import SettingsDrawer from '../SettingsDrawer'
import { useLocalStorage } from '@mantine/hooks'
import { usePathname, useSearchParams } from 'next/navigation'
import User from '../User'

function SearchNavbar() {
    const [darkTheme] = useLocalStorage({
        key: 'dark-theme',
        defaultValue: true,
    })
    const pathName = usePathname()
    const val = useSearchParams()

    return (
        <div className='sticky top-0 p-5 pb-0 border-b border-[#dadce0] dark:border-[#3c4043] dark:bg-[#202124] bg-white z-50'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center md:gap-10 gap-3 grow'>
                    <Link href='/'>
                        <Image
                            src={`${
                                darkTheme
                                    ? '/google-dark.png'
                                    : '/google-light.webp'
                            }`}
                            className='min-w-[92px] min-h-[30px]'
                            alt='Google'
                            width={92}
                            height={30}
                        />
                    </Link>
                    <SearchBarNav pathName={pathName} />
                </div>
                <ul className='flex items-center gap-3'>
                    <li className='md:block hidden'>
                        <SettingsDrawer>
                            <Tooltip
                                text='Quick Settings'
                                className='bg-[#3c4043e6] rounded py-1 px-2 font-medium text-xs text-white tracking-wider top-[42px]'
                            >
                                <div className='hover:bg-[#3c404314] dark:hover:bg-[#e8eaed14] h-9 rounded-full'>
                                    <svg
                                        focusable='false'
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 24 24'
                                        height='35'
                                        width='35'
                                        className='fill-[#5f6368] dark:fill-[#ffffffde] px-1'
                                    >
                                        <path d='M13.85 22.25h-3.7c-.74 0-1.36-.54-1.45-1.27l-.27-1.89c-.27-.14-.53-.29-.79-.46l-1.8.72c-.7.26-1.47-.03-1.81-.65L2.2 15.53c-.35-.66-.2-1.44.36-1.88l1.53-1.19c-.01-.15-.02-.3-.02-.46 0-.15.01-.31.02-.46l-1.52-1.19c-.59-.45-.74-1.26-.37-1.88l1.85-3.19c.34-.62 1.11-.9 1.79-.63l1.81.73c.26-.17.52-.32.78-.46l.27-1.91c.09-.7.71-1.25 1.44-1.25h3.7c.74 0 1.36.54 1.45 1.27l.27 1.89c.27.14.53.29.79.46l1.8-.72c.71-.26 1.48.03 1.82.65l1.84 3.18c.36.66.2 1.44-.36 1.88l-1.52 1.19c.01.15.02.3.02.46s-.01.31-.02.46l1.52 1.19c.56.45.72 1.23.37 1.86l-1.86 3.22c-.34.62-1.11.9-1.8.63l-1.8-.72c-.26.17-.52.32-.78.46l-.27 1.91c-.1.68-.72 1.22-1.46 1.22zm-3.23-2h2.76l.37-2.55.53-.22c.44-.18.88-.44 1.34-.78l.45-.34 2.38.96 1.38-2.4-2.03-1.58.07-.56c.03-.26.06-.51.06-.78s-.03-.53-.06-.78l-.07-.56 2.03-1.58-1.39-2.4-2.39.96-.45-.35c-.42-.32-.87-.58-1.33-.77l-.52-.22-.37-2.55h-2.76l-.37 2.55-.53.21c-.44.19-.88.44-1.34.79l-.45.33-2.38-.95-1.39 2.39 2.03 1.58-.07.56a7 7 0 0 0-.06.79c0 .26.02.53.06.78l.07.56-2.03 1.58 1.38 2.4 2.39-.96.45.35c.43.33.86.58 1.33.77l.53.22.38 2.55z'></path>
                                        <circle
                                            cx='12'
                                            cy='12'
                                            r='3.5'
                                        ></circle>
                                    </svg>
                                </div>
                            </Tooltip>
                        </SettingsDrawer>
                    </li>
                    <li className='md:block hidden'>
                        <Tooltip
                            text='Google apps'
                            className='bg-[#3c4043e6] rounded py-1 px-2 font-medium text-xs text-white tracking-wider top-[42px]'
                        >
                            <button className='hover:bg-[#3c404314] dark:hover:bg-[#e8eaed14] h-9 rounded-full'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 -960 960 960'
                                    height='35'
                                    width='35'
                                    className='fill-[#5f6368] dark:fill-[#ffffffde] px-1'
                                >
                                    <path d='M226-160q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-414q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-668q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Z' />
                                </svg>
                            </button>
                        </Tooltip>
                    </li>
                    <li>
                        <User />
                    </li>
                </ul>
            </div>
            <div className='lg:px-[140px] flex items-center dark:text-[#e8eaed]'>
                <Link
                    href={`/search?q=${val.get('q') ?? ''}`}
                    className={`flex items-center gap-1 border-b-4 px-2 py-5 ${
                        pathName === '/search'
                            ? 'dark:border-[#8ab4f8] border-[#1a0dab] dark:text-[#8ab4f8] text-[#1a0dab]'
                            : 'border-transparent'
                    }`}
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        height='18'
                        viewBox='0 -960 960 960'
                        width='18'
                        focusable='false'
                        className={`${
                            pathName === '/search'
                                ? 'dark:fill-[#8ab4f8] fill-[#1a0dab]'
                                : 'dark:fill-[#e8eaed] fill-inherit'
                        } `}
                    >
                        <path d='M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Z' />
                    </svg>
                    <span>All</span>
                </Link>
                <Link
                    href={`/search/images?q=${val.get('q') ?? ''}`}
                    className={`${
                        pathName === '/search/images'
                            ? 'dark:border-[#8ab4f8] border-[#1a0dab] dark:text-[#8ab4f8] text-[#1a0dab]'
                            : 'border-transparent'
                    } border-b-4 px-2 py-5`}
                >
                    Images
                </Link>
            </div>
        </div>
    )
}

export default SearchNavbar
