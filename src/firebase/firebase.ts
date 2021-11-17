import {initializeApp, FirebaseOptions} from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
import { FirestoreSimple } from '@firestore-simple/web';
import { cred } from "./cred";

export const credentials: FirebaseOptions = cred;


//console.log(credentials.config);
const firebase = initializeApp(credentials);

export const firestoreSimple = new FirestoreSimple(getFirestore(firebase))

export default firebase;