'use client'

import useUser from '@/hooks/useUser'
import Tooltip from './Tooltip'
import { loginWithGoogle } from '@/firebase/FireAuth'
import Image from 'next/image'
import UserPopover from './UserPopover'

function User() {
    const { user } = useUser()

    return (
        <>
            {user !== null ? (
                <Tooltip
                    text={`Google account`}
                    email={user.email}
                    userName={user.displayName}
                >
                    <UserPopover user={user}>
                        <div className='flex items-center gap-2'>
                            <Image
                                src={user.photoURL ?? ''}
                                alt={user.displayName ?? 'User'}
                                className='w-7 h-7 rounded-full'
                                width={28}
                                height={28}
                            />
                        </div>
                    </UserPopover>
                </Tooltip>
            ) : (
                <button
                    className='dark:bg-[#8ab4f8] bg-[#1a73e8] rounded hover:bg-[#1b66c9] dark:hover:bg-[#93baf9] duration-100 text-white dark:text-[#202124] font-medium text-sm px-[23px] py-[9px] min-w-[87px] min-h-[38px]'
                    onClick={async () => await loginWithGoogle()}
                >
                    Sign in
                </button>
            )}
        </>
    )
}

export default User
