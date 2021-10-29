// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAS9v1y0WPnmQlkqogP1-YhrDoQ-pyP4Gk',
	authDomain: 'instagram-clone-ddac7.firebaseapp.com',
	projectId: 'instagram-clone-ddac7',
	storageBucket: 'instagram-clone-ddac7.appspot.com',
	messagingSenderId: '64739055898',
	appId: '1:64739055898:web:7be1d0015be700ab9074a3',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
