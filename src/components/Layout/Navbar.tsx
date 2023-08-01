import Link from 'next/link'
import Tooltip from '../Tooltip'
import User from '../User'

function Navbar() {
    return (
        <div className='flex justify-end p-5'>
            <ul className='flex items-center gap-3'>
                <li>
                    <Link
                        href={'https://mail.google.com/mail/&ogbl'}
                        className='text-[#000000de] dark:text-white hover:underline text-[13px]'
                    >
                        Gmail
                    </Link>
                </li>
                <li>
                    <Link
                        href={'https://www.google.com/imghp?hl=en&ogbl'}
                        className='text-[#000000de] dark:text-white hover:underline text-[13px]'
                    >
                        Images
                    </Link>
                </li>
                <li className='ml-3'>
                    <Tooltip
                        text='Google apps'
                        className='bg-[#3c4043e6] rounded py-1 px-2 font-medium text-xs text-white tracking-wider top-[42px]'
                    >
                        <button className='hover:bg-[#3c404314] dark:hover:bg-[#e8eaed14] h-9 rounded-full'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                height='35'
                                viewBox='0 -960 960 960'
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
    )
}

export default Navbar
