import firebase from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
import 'firebase/auth';
import { FirestoreSimple } from '@firestore-simple/web';
import { Credentials } from './types/credentials';

export const credentials: Credentials = {
    config: {
        apiKey: <string> process.env.VUE_APP_FIREBASE_API_KEY,
        authDomain: <string> process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
        storageBucket: <string> process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
        databaseURL: <string> process.env.VUE_APP_FIREBASE_DB_URL,
        projectId: <string> process.env.VUE_APP_FIREBASE_PROJECT_ID,
        messagingSenderId: <string> process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID
    }
}

//console.log(credentials.config);
if (!firebase.getApps.length){
    firebase.initializeApp(credentials.config)
}

export const firestoreSimple = new FirestoreSimple(getFirestore())

export default firebase;