import FooterCountry from '../Layout/FooterCountry'
import SettingsDrawer from '../SettingsDrawer'

function SearchFooter() {
    return (
        <footer className='dark:bg-[#171717] mt-auto'>
            <FooterCountry />
            <div className='dark:text-[#bdc1c6] text-[#4d5156] py-[15px] px-[30px] items-center text-sm'>
                <p>
                    More options in{' '}
                    <SettingsDrawer>
                        <span className='dark:text-[#8ab4f8] text-[#1a0dab] font-bold cursor-pointer'>
                            Quick settings
                        </span>
                    </SettingsDrawer>
                </p>
            </div>
        </footer>
    )
}

export default SearchFooter
