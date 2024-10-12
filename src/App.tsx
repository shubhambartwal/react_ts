
import './App.css';
import { useState } from 'react';
import AddNote from './components/add-note/AddNote';
import Note from './components/note/Notes';
import {Notes} from './components/note/data'
import { NoteType } from './components/note/notes-type';
function App() {
  const [notes,setNotes]=useState(Notes)
  const addNote=(note:NoteType)=>{
    setNotes([note,...Notes])
  }
  return (
    <div className="App">
     <h1> Note app</h1>
     <AddNote addNote={addNote}/>
    { notes.map((item)=>
      <Note key={item.id} priority={item.priority} text={item.text}/>
     )
    }
     
    </div>
  );
}

export default App;
