type Props = {
    text: string
    on?: boolean
    linkText?: string
    link?: boolean
}

function SettingsItem({ text, on, link, linkText }: Props) {
    return (
        <div className='flex items-center justify-between dark:text-[#bdc1c6] text-[#4d5156] px-6 cursor-pointer py-[10px] hover:bg-[#f1f3f4] dark:hover:bg-[#303134]'>
            <div>
                <p>{text}</p>
                {link && linkText && (
                    <p className='dark:text-[#8ab4f8] text-[#1a73e8] text-xs cursor-pointer'>
                        {linkText}
                    </p>
                )}
            </div>
            <div className='flex items-center gap-2'>
                {on && <p className='text-xs'>On</p>}
                <svg
                    focusable='false'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    width={24}
                    height={24}
                    fill='#9aa0a6'
                >
                    <path d='M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z'></path>
                </svg>
            </div>
        </div>
    )
}

export default SettingsItem
