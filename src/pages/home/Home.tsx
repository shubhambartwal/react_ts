
import './Home.css';
import { useContext, useState } from 'react';
import AddNote from '../../components/add-note/AddNote';
import Note from '../../components/note/Notes';
import { Notes } from '../../components/note/data'
import { NoteType } from '../../components/note/notes-type';
import { ThemeContext } from '../../context/theme/ThemeContext';
function Home() {
  const [notes, setNotes] = useState(Notes)
  const [editMode, setEditMode] = useState(false)
  const [noteToBeEdited, setNoteToBeEdited] = useState<NoteType | null>(null)
  const theme=useContext(ThemeContext)
  console.log(theme)
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
  return (
    <div className={`Home ${theme}`} >
      <h1> Note App</h1>
      {/* <button onClick={themeToggler}>Click me</button> */}
      <AddNote addNote={addNote} editMode={editMode} noteToBeEdited={noteToBeEdited} updateNote={updateNote} />
      {notes.map((item) =>
        <Note key={item.id} id={item.id} priority={item.priority} editNote={editNote} deleteNote={deleteNote} text={item.text} />
      )
      }

    </div>
  );
}

export default Home;
