'use client'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useLocalStorage } from '@mantine/hooks'

type SettingsDropdownProps = {
    children: React.ReactNode
}

function SettingsDropdown({ children }: SettingsDropdownProps) {
    const [darkTheme, setDarkTheme] = useLocalStorage({
        key: 'dark-theme',
        defaultValue: true,
    })

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className='outline-none select-text'>
                {children}
            </DropdownMenuTrigger>
            <DropdownMenuContent className='dark:bg-[#202124] dark:shadow-setting-dropdown text-sm shadow-setting-dropdown-light dark:text-[#bdc1c6] border-0 p-0 text-[#202124]'>
                <DropdownMenuItem className='dark:hover:bg-[#37383a] hover:bg-[#e5e5e5] px-4 py-2 cursor-pointer'>
                    Search settings
                </DropdownMenuItem>
                <DropdownMenuItem className='dark:hover:bg-[#37383a] hover:bg-[#e5e5e5] px-4 py-2 cursor-pointer'>
                    Advanced search
                </DropdownMenuItem>
                <DropdownMenuItem className='dark:hover:bg-[#37383a] hover:bg-[#e5e5e5] px-4 py-2 cursor-pointer'>
                    Your data in search
                </DropdownMenuItem>
                <DropdownMenuItem className='dark:hover:bg-[#37383a] hover:bg-[#e5e5e5] px-4 py-2 cursor-pointer'>
                    Search history
                </DropdownMenuItem>
                <DropdownMenuItem className='dark:hover:bg-[#37383a] hover:bg-[#e5e5e5] px-4 py-2 cursor-pointer'>
                    Search help
                </DropdownMenuItem>
                <DropdownMenuItem className='dark:hover:bg-[#37383a] hover:bg-[#e5e5e5] px-4 py-2 cursor-pointer'>
                    Send feedback
                </DropdownMenuItem>
                <DropdownMenuSeparator className='dark:bg-[#3c4043] bg-[#dadce0]' />
                <DropdownMenuItem
                    className='dark:hover:bg-[#37383a] hover:bg-[#e5e5e5] px-4 py-2 cursor-pointer'
                    onClick={() => setDarkTheme((prev) => !prev)}
                >
                    Dark theme: {darkTheme ? 'On' : 'Off'}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default SettingsDropdown
