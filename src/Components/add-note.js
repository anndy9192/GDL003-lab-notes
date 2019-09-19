import React, { useState } from 'react'
import firebase from './firebasekey'

const AddNote = () => {
    const [note, setNote] = useState('')
    const [time, setTime] = useState('')
    const userName = firebase.getCurrentUsername()
    console.log("user name in add note", userName)

    function onSubmit(e) {
        e.preventDefault()

        firebase.getDB().collection('notes')
            .add({
                note,
                time,
                userName
            })
            .then(() => {
                setNote('')
                setTime('')
            })
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="containerNot">
                <span className="tit"> Title </span>
                <input className="text" type="text" value={note} onChange={e => setNote(e.currentTarget.value)} />
            </div>
            <br />
            <div>
                <span className="tit"> Note </span>
                <input className="text" type="text" value={time} onChange={e => setTime(e.currentTarget.value)} />
            </div>
            <br />
            <button className= "btnAdd" >Add a note</button>
        </form>

    )
}

export default AddNote