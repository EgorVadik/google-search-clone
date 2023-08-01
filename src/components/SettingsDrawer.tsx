import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'
import SettingsItem from './SettingsItem'
import SettingsThemeRadio from './SettingsThemeRadio'
import SettingsThemeRadioDark from './SettingsThemeRadioDark'

type Props = {
    children: React.ReactNode
}

function SettingsDrawer({ children }: Props) {
    return (
        <Sheet>
            <SheetTrigger>{children}</SheetTrigger>
            <SheetContent className='dark:bg-[#202124] border-0 text-[#202124] dark:text-[#e8eaed]'>
                <SheetHeader className='space-y-5 border-b border-[#3c4043] pb-5 px-6'>
                    <SheetTitle className='text-[28px] font-medium'>
                        Quick Settings
                    </SheetTitle>
                    <SheetDescription>
                        <button className='w-full py-[10px] dark:text-[#8ab4f8] text-[#1a73e8] border border-[#dadce0] dark:border-[#3c4043] rounded-lg outline-none dark:hover:bg-[#8ab4f814] hover:text-[#1967d2] hover:bg-[#1a73e814] duration-150'>
                            See all Search settings
                        </button>
                    </SheetDescription>
                </SheetHeader>

                <div className='border-b border-[#3c4043]'>
                    <p className='text-xl px-6 py-[10px]'>Your Activity</p>
                    <SettingsItem text='Search Customization' on />
                    <p className='dark:text-[#8ab4f8] text-[#1a73e8] text-xs hover:underline cursor-pointer px-6 py-4'>
                        Learn more about your data in Search
                    </p>
                </div>

                <div className='border-b border-[#3c4043]'>
                    <p className='text-xl px-6 py-[10px]'>Using Search</p>
                    <SettingsItem
                        text='SafeSearch filters'
                        link
                        linkText='Helps manage explicit content'
                    />
                    <div className='flex items-center justify-between dark:text-[#bdc1c6] text-[#4d5156] px-6 cursor-pointer py-[10px] hover:bg-[#f1f3f4] dark:hover:bg-[#303134]'>
                        <p>Languages</p>
                        <p className='text-[#9aa0a6]'>English</p>
                    </div>
                    <SettingsItem text='Advanced Search' />
                </div>

                <div className='border-b border-[#3c4043]'>
                    <p className='text-xl px-6 py-[10px]'>Appearance</p>
                    <SettingsThemeRadio />
                    <SettingsThemeRadioDark />
                </div>

                <div className=''>
                    <p className='text-xl px-6 py-[10px]'>Support</p>
                    <SettingsItem text='Search help' />
                    <SettingsItem text='Privacy' />
                    <SettingsItem text='Terms' />
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default SettingsDrawer
