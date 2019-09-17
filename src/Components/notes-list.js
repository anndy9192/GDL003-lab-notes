import React, { useState, useEffect } from 'react';
import firebase from './firebasekey'


function useTimes() {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        const unsubscribe = firebase
            .firestore()
            .collection('notes')
            .onSnapshot((snapshot) => {
                const newNotes = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setNotes(newNotes)
            })
        return () => unsubscribe()
    }, [])

    return notes
}
const NotesList = () => {

    const notes = useTimes()
    return (
        <div class="container">
            <h2 class="titleList"> Notes list</h2>
            {notes.map((note) =>
                <div class="card_main_container" key={note.id}>
                    <div class="card_main">
                        <div class="wrapper">

                            <div class="content">
                                <h4 class="cardTitle"><b>{note.note}</b></h4>
                                <p>Nota: {note.time}</p>
                            </div>

                        </div>
                    </div>
                </div>)}
        </div>
    )
}

export default NotesList