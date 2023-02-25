// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth,
    GoogleAuthProvider,
    signInWithCredential,
    signOut,
    onAuthStateChanged,
    signInWithPopup,
    getRedirectResult,
    signInWithRedirect
} from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2fE9bEFs6CASFpyfswNO7CirJBB7lJ7Q",
  authDomain: "calm-sylph-378821.firebaseapp.com",
  projectId: "calm-sylph-378821",
  storageBucket: "calm-sylph-378821.appspot.com",
  messagingSenderId: "497637763602",
  appId: "1:497637763602:web:3ca3aa37a7733e57a606cb",
  measurementId: "G-9M0ENGD3F8"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);
const auth = getAuth(firebaseApp);
const db = getFirestore();
const storage=getStorage();

export { auth, 
    firebaseApp,
    db,
    GoogleAuthProvider,
    signInWithCredential,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    storage,
    getRedirectResult,
    signInWithRedirect
  };