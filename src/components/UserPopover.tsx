import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import { logout } from '@/firebase/FireAuth'
import { User } from 'firebase/auth'
import Image from 'next/image'

type Props = {
    children: React.ReactNode
    user: User
}

function UserPopover({ children, user }: Props) {
    return (
        <Popover>
            <PopoverTrigger>{children}</PopoverTrigger>
            <PopoverContent className='dark:bg-[#2d2f31] rounded-3xl p-0 pt-2 max-w-[370px] min-w-[350px]'>
                <div className='px-2'>
                    <div className='dark:bg-[#1f1f1f] rounded-3xl pt-5'>
                        <div className='px-5 flex flex-wrap items-center gap-3'>
                            <Image
                                src={user.photoURL ?? ''}
                                alt={user.displayName ?? 'User'}
                                className='w-16 h-16 rounded-full'
                                width={64}
                                height={64}
                            />
                            <div>
                                <p className='dark:text-white text-[#1f1f1f] font-semibold text-sm'>
                                    {user.displayName}
                                </p>
                                <p className='dark:text-[#bdc1c6] text-[#4f525c] text-xs'>
                                    {user.email}
                                </p>
                            </div>
                            <div className='flex-grow flex justify-end gap-2 text-sm'>
                                <button className='border dark:border-[#8e918f] rounded-lg px-4 py-2 font-semibold'>
                                    Manage your Google Account
                                </button>
                            </div>
                        </div>
                        <button className='flex items-center gap-7 justify-center text-center w-full py-3 border-t dark:border-[#2d2f31] mt-4 font-semibold text-sm hover:bg-[#2f3339] rounded-b-3xl'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                height='24'
                                viewBox='0 -960 960 960'
                                width='24'
                                className='dark:fill-[#e3e3e3] fill-[#1f1f1f]'
                            >
                                <path d='M730-400v-130H600v-60h130v-130h60v130h130v60H790v130h-60Zm-370-81q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM40-160v-94q0-35 17.5-63.5T108-360q75-33 133.338-46.5 58.339-13.5 118.5-13.5Q420-420 478-406.5 536-393 611-360q33 15 51 43t18 63v94H40Zm60-60h520v-34q0-16-9-30.5T587-306q-71-33-120-43.5T360-360q-58 0-107.5 10.5T132-306q-15 7-23.5 21.5T100-254v34Zm260-321q39 0 64.5-25.5T450-631q0-39-25.5-64.5T360-721q-39 0-64.5 25.5T270-631q0 39 25.5 64.5T360-541Zm0-90Zm0 411Z' />
                            </svg>
                            <span className='mr-16 dark:text-[#e3e3e3] text-[#1f1f1f]'>
                                Add another account
                            </span>
                        </button>
                    </div>
                </div>

                <button
                    onClick={async () => await logout()}
                    className='flex items-center gap-7 justify-center text-center w-full border-b dark:border-[#444746] py-3 font-semibold hover:bg-[#373b41] text-sm'
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        height='24'
                        viewBox='0 -960 960 960'
                        width='24'
                        className='dark:fill-[#e3e3e3] fill-[#1f1f1f]'
                    >
                        <path d='M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h299v60H180v600h299v60H180Zm486-185-43-43 102-102H360v-60h363L621-612l43-43 176 176-174 174Z' />
                    </svg>
                    <span className='mr-36 dark:text-[#e3e3e3] text-[#1f1f1f]'>
                        Sign out
                    </span>
                </button>

                <div>
                    <div className='flex items-center justify-center gap-2 px-5 py-3'>
                        <p className='dark:text-[#bdc1c6] text-[#6d6e70] text-xs'>
                            Privacy Policy
                        </p>
                        <p className='dark:text-[#bdc1c6] text-[#6d6e70] text-xs'>
                            Terms of Service
                        </p>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}

export default UserPopover
