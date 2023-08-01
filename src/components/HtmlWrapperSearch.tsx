'use client'
import { useLocalStorage } from '@mantine/hooks'
import SearchNavbar from './LayoutSearch/SearchNavbar'
import SearchFooter from './LayoutSearch/SearchFooter'

function HtmlWrapperSearch({ children }: { children: React.ReactNode }) {
    const [darkTheme] = useLocalStorage({
        key: 'dark-theme',
        defaultValue: true,
    })

    return (
        <html lang='en' className={`${darkTheme ? 'dark' : ''}`}>
            <body className='min-h-screen dark:bg-[#202124] duration-300 flex flex-col justify-between'>
                <SearchNavbar />
                {children}
                <SearchFooter />
            </body>
        </html>
    )
}

export default HtmlWrapperSearch
