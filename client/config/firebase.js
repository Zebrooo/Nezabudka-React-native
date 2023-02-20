import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from '@firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAo6k1I6slmmRChflATKOyAG5AvubUWDf8',
  authDomain: 'nezabudka-aaf06.firebaseapp.com',
  projectId: 'nezabudka-aaf06',
  storageBucket: 'nezabudka-aaf06.appspot.com',
  messagingSenderId: '869362173595',
  appId: '1:869362173595:web:48a81b14a76fa75a49283e',
  measurementId: 'G-NR5XJ52X0M',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getFirestore();

export { auth, provider, database, app };
