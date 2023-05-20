import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD2beTQWxajKPCxo9EoNjPZzx47M1Qvm_M',
  authDomain: 'mymoney-54d85.firebaseapp.com',
  projectId: 'mymoney-54d85',
  storageBucket: 'mymoney-54d85.appspot.com',
  messagingSenderId: '587107495378',
  appId: '1:587107495378:web:cf82a87fbd4d0a61c1ec0b',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
