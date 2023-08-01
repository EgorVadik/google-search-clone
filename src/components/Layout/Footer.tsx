import SettingsDropdown from '../SettingsDropdown'
import FooterCountry from './FooterCountry'
import FooterLinks from './FooterLinks'

function Footer() {
    return (
        <div className='dark:bg-[#171717]'>
            <FooterCountry />
            <div className='flex sm:flex-row flex-col xl:justify-between justify-evenly py-[15px] px-[30px] items-center text-sm'>
                <div className='space-x-8 whitespace-nowrap'>
                    <FooterLinks
                        href='https://about.google/?utm_source=google-ID&utm_medium=referral&utm_campaign=hp-footer&fg=1'
                        text='About'
                    />
                    <FooterLinks
                        href='https://ads.google.com/intl/en_id/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1'
                        text='Advertising'
                    />
                    <FooterLinks
                        href='https://www.google.com/intl/en_id/business/'
                        text='Business'
                    />
                    <FooterLinks
                        href='https://www.google.com/search/howsearchworks/?fg=1'
                        text='How Search works'
                    />
                </div>
                <div className='space-x-8'>
                    <FooterLinks
                        href='https://policies.google.com/privacy?hl=en-ID&fg=1'
                        text='Privacy'
                    />
                    <FooterLinks
                        href='https://policies.google.com/terms?hl=en-ID&fg=1'
                        text='Terms'
                    />
                    <SettingsDropdown>
                        <div className='dark:text-[#bdc1c6] text-[#70757a] hover:underline'>
                            Settings
                        </div>
                    </SettingsDropdown>
                </div>
            </div>
        </div>
    )
}

export default Footer
