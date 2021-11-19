import { initializeApp, cert, getApps, getApp } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import { getAuth } from 'firebase-admin/auth'
import { getStorage } from 'firebase-admin/storage'
import account from './account.json'

const config = {
    credential: cert(account),
    storageBucket: 'jesadakorn.appspot.com'
}

const initAdmin = (config) => {
    if (getApps().length === 0) {
        return initializeApp(config);
    } else {
        return getApp();
    }
}

const app = initAdmin(config)
export const firestore = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)
