import React, { useState } from 'react'
import firebase from './firebasekey'

const AddNote = () => {
    const [note, setNote] = useState('')
    const [time, setTime] = useState('')

    function onSubmit(e){
        e.preventDefault()

        firebase
        .firestore()
        .collection('notes')
        .add({
            note,
            time
        })
        .then(()=> {
            setNote('')
            setTime('')
        })
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <span className="tit"> Title </span>
                <input type="text" value={note} onChange={e => setNote(e.currentTarget.value)}/>
            </div>
            <div>
            <span className="tit"> Note </span>
                <input type="text" value={time} onChange={e =>setTime(e.currentTarget.value)} />
            </div>
            <button>Add a note</button>
        </form>

    )
}

export default AddNote