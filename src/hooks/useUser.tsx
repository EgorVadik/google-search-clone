'use client'

import { logout } from '@/firebase/FireAuth'
import { auth } from '@/firebase/init'
import { User, onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'

function useUser() {
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
        })
        return () => unsubscribe()
    }, [])

    return { user }
}

export default useUser
