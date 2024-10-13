
import './App.css';
import { useEffect, useState } from 'react';
import AddNote from './components/add-note/AddNote';
import Note from './components/note/Notes';
import { Notes } from './components/note/data'
import { NoteType, Priority } from './components/note/notes-type';
function App() {
  const [notes, setNotes] = useState(Notes)
  const [editMode, setEditMode] = useState(false)
  const [noteToBeEdited, setNoteToBeEdited] = useState<NoteType | null>(null)
  const addNote = (note: NoteType) => {
    setNotes([note, ...Notes])
  }
  const editNote = (id: string) => {
    setEditMode(true)
    const note = notes.find((note) => note.id === id)
    if (note) {
      setNoteToBeEdited(note)
    }
  }
  const deleteNote = (id: string) => {
    const note = notes.find((note) => note.id === id)
    setNotes(notes => notes.filter((item) => item !== note))
    // console.log(index)
  }
  const updateNote = (updatedNote: NoteType) => {
    console.log(updatedNote, "got the updated note")
    const index = notes.findIndex((note) => note.id === updatedNote.id)
    let editedNote = [...notes]
    editedNote.splice(index, 1, updatedNote)
    setNotes(editedNote)
  }
  useEffect(()=>{},[notes])
  return (
    <div className="App">
      <h1> Note app</h1>
      <AddNote addNote={addNote} editMode={editMode} noteToBeEdited={noteToBeEdited} updateNote={updateNote} />
      {notes.map((item) =>
        <Note key={item.id} id={item.id} priority={item.priority} editNote={editNote} deleteNote={deleteNote} text={item.text} />
      )
      }

    </div>
  );
}

export default App;
