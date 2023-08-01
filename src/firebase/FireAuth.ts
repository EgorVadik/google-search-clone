import {
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    signOut,
} from 'firebase/auth'
import { auth } from './init'

export const loginWithGoogle = async () => {
    const googleProvider = new GoogleAuthProvider()
    try {
        await signInWithPopup(auth, googleProvider)
        return true
    } catch (error) {
        console.log(error)

        return false
    }
}

export const logout = async () => {
    try {
        await signOut(auth)
        return true
    } catch (error) {
        return false
    }
}
