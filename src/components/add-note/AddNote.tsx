import './add-note.css'
import { useEffect, useState } from 'react';
import { NoteType, Priority } from '../note/notes-type';
import { v4 as uuidv4 } from 'uuid';
type AddNoteProps = {
    addNote: (note: NoteType) => void,
    updateNote: (updateNote: NoteType) => void
    editMode: boolean,
    noteToBeEdited: NoteType | null

}
const AddNote = (props: AddNoteProps) => {
    const [note, setNote] = useState('');
    const [priority, setPriority] = useState<Priority>('low')
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNote(e.target.value)
    }
    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPriority(e.target.value as Priority)
    }
    const setNoteContent = (note: NoteType) => {
        setNote(note.text)
        setPriority(note.priority)
    }
    useEffect(() => {
        if (props.noteToBeEdited)
            setNoteContent(props.noteToBeEdited)
    }, [props.noteToBeEdited, props.editMode])
    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (props.editMode) {
            console.log('inside the edit mode')
            if (props.noteToBeEdited) {
                console.log("inside the note to be edited")
                props.updateNote({
                    id: props.noteToBeEdited.id,
                    text: note,
                    priority: priority
                })

            }
        }
        else {
            props.addNote({
                id: uuidv4(),
                text: note,
                priority: priority
            })
           
        }
        setNote('')
        setPriority('low')
    }
    return (
        <div >
            <form className="add-note" >
                <input type="text" onChange={handleChange} value={note} />
                <select onChange={handleSelect} value={priority}>
                    <option value="low">low</option>
                    <option value="medium">medium</option>
                    <option value="high">high</option>
                </select>
                <button onClick={handleClick}>{props.editMode ? 'Edit' : 'Add'}</button>

            </form>
        </div>
    )
}
export default AddNote