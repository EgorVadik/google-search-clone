'use client'
import { useLocalStorage } from '@mantine/hooks'
import Footer from './Layout/Footer'
import Navbar from './Layout/Navbar'

function HtmlWrapper({ children }: { children: React.ReactNode }) {
    const [darkTheme] = useLocalStorage({
        key: 'dark-theme',
        defaultValue: true,
    })

    return (
        <html lang='en' className={`${darkTheme ? 'dark' : ''}`}>
            <body className='min-h-screen flex flex-col justify-between dark:bg-[#202124] duration-300'>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}

export default HtmlWrapper
