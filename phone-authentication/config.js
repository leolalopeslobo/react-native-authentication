import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export const firebaseConfig = {
    apiKey: "AIzaSyC_5Y1hzpZfD-LEyjO-FIL9nxUQBDvN02s",
  authDomain: "task-caad3.firebaseapp.com",
  projectId: "task-caad3",
  storageBucket: "task-caad3.appspot.com",
  messagingSenderId: "455455273459",
  appId: "1:455455273459:web:0f1d66c281917d868b6286",
  measurementId: "G-17F9V9JC21"
};

// if (!firebase.apps.length){
//     firebase.initializeApp(firebaseConfig);
// }

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}