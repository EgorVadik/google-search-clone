import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: 'AIzaSyAc1lq468Bg3ORp0d9iSPJ_DuHlh68nZHU',
    authDomain: 'secret-356512.firebaseapp.com',
    projectId: 'secret-356512',
    storageBucket: 'secret-356512.appspot.com',
    messagingSenderId: '560503902505',
    appId: '1:560503902505:web:f68adb325c468a697d2738',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
