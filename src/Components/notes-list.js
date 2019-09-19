import React, { useState, useEffect } from 'react';
import firebase from './firebasekey'

function useTimes() {
    const [notes, setNotes] = useState([])
    

    useEffect(() => {
        const username = firebase.getCurrentUsername()
        
        const unsubscribe = firebase.getDB()
            .collection('notes')
            .onSnapshot((snapshot) => {
                const newNotes = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setNotes(newNotes)
            })
        return () => unsubscribe()
        /*let notesArray = Promise.resolve(firebase.getNotes()).then(function (value) {
            setNotes(value)
        })
        console.log("notesArray", notesArray)*/
    }, [])

    return notes
}
const NotesList = () => {
    
    const notes = useTimes()

    return (
        <div className="container">
            <h2 className="titleList"> Notes list {firebase.getCurrentUsername()}</h2>
            {notes.map((note) =>
                <div className="card_main_container" key={note.id}>
                    <div className="card_main">
                        <div className="wrapper">

                            <div className="content">
                                <center>
                                    <h4 className="cardTitle"><b>{note.note}</b></h4>
                                    <p>Nota: {note.time}</p>
                                </center>
                            </div>

                        </div>
                    </div>
                </div>)}
        </div>
    )
}

export default NotesList