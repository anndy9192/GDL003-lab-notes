import React, { Component } from 'react';
import NotesList from './notes-list'
import AddNote from './add-note'

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
