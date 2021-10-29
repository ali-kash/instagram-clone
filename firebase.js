// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyC0vWxatc7L7v87S4VeNpXDSAYeG-_0v10',
	authDomain: 'insta-clone-8dd55.firebaseapp.com',
	projectId: 'insta-clone-8dd55',
	storageBucket: 'insta-clone-8dd55.appspot.com',
	messagingSenderId: '777342340023',
	appId: '1:777342340023:web:5505c61257181c93133632',
	measurementId: 'G-VMWVVW2XVK',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
