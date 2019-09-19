import firebase from 'firebase/app';
import 'firebase/firestore';
import { promised } from 'q';

const firebaseConfig = {
  apiKey: "AIzaSyC2b9Bn0ASbjcJhk5gWhDIlTN_C6kK6mFU",
  authDomain: "lab-notes-15efe.firebaseapp.com",
  databaseURL: "https://lab-notes-15efe.firebaseio.com",
  projectId: "lab-notes-15efe",
  storageBucket: "",
  messagingSenderId: "210831108556",
  appId: "1:210831108556:web:f80bab7a14c24283539569"
};

class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig)
    this.auth = firebase.auth()
    this.db = firebase.firestore()
  }

  getDB () {
    return this.db
  }

  logout() {
    return this.auth.signOut()
  }

  isInitialized() {
    return new promised(resolve => {
      this.auth.onAuthStateChanged(resolve)
    })
  }

  getCurrentUsername() {
    return this.auth.currentUser && this.auth.currentUser.displayName
  }

  async getNotes() {
      let documents = [];
      //const snapshot = await firebase.firestore().collection('notes').onSnapshot()
      firebase.firestore().collection('notes').onSnapshot((snapshot) => {
        documents = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }))
        console.log(documents)
        
    })
      return documents;
    /*
    const snapshot = await firebase.firestore().collection('notes').get()
    const documents = [];
    snapshot.forEach(doc => {
      const document = {
        id: doc.id,
        ...doc.data()
      };
      documents.push(document);
    })
    return documents;
    */
  }

  /*addNotes(){
    firebase.firestore().collection('notes')
        .add({
            note,
            time
        })
  }*/
}

export default new Firebase()