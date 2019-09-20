import React, { useState, useEffect } from 'react';
import firebase from './firebasekey'
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

function deletPost (id) {
    firebase.getDB().collection("notes").doc(id).delete().then((data) => {
      console.log('data', data);
      console.log('The note has been deleted!');
    })
      .catch((error) => {
        console.log(error)
        console.log("The Note has not deleted");
      });   
  }


const NotesList = () => {    
    const notes = useTimes()
    return (
        <div className="container">
            <h2 className="titleList"> Remember Notes list {firebase.getCurrentUsername()}</h2>
            {notes.map((note) =>
                <div className="card_main_container" key={note.id}>
                    <div className="card_main">
                        <div className="wrapper">

                            <div className="content">
                                <center>
                                    <h4 className="cardTitle"><b>{note.note}</b></h4>
                                    <p>Nota: {note.time}</p>
                                </center>
                                <div className="icon">
                                    <table>
                                        <tr>
                                            <td width="30">
                                            <button className='btnEdit' type="button">Edit</button>
              
                                            </td>
                                            <td>
                                            <button className='btnDelet' type="button" onClick={() => deletPost(note.id)} key={note.uid}>Delete </button>
                                            </td>
                                        </tr>
                                    </table>



                                </div>
                            </div>

                        </div>
                     </div>
                </div>)}
        </div>
    )
}

export default NotesList