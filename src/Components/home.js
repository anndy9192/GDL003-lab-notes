import React, { Component } from 'react';
import firebase from './firebasekey'
import NotesList from './notes-list'
import AddNote from './add-note'

/*
firebase.firestore().collection('notes').add({
    note: "second test",
    time: 6
})
*/

class Home extends Component {

    render() {
        return (
            <div align="center">
               
                <AddNote />
                <NotesList />
                
            </div>
        )
    }
}

export default Home;
