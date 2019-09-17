import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC2b9Bn0ASbjcJhk5gWhDIlTN_C6kK6mFU",
    authDomain: "lab-notes-15efe.firebaseapp.com",
    databaseURL: "https://lab-notes-15efe.firebaseio.com",
    projectId: "lab-notes-15efe",
    storageBucket: "",
    messagingSenderId: "210831108556",
    appId: "1:210831108556:web:f80bab7a14c24283539569"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase