import './add-note.css'
import { useState } from 'react';
import { NoteType, Priority } from '../note/notes-type';
import { v4 as uuidv4 } from 'uuid';
type AddNoteProps = {
    addNote: (note: NoteType) => void
}
const AddNote = ({ addNote }: AddNoteProps) => {
    const [note, setNote] = useState('');
    const [priority, setPriority] = useState<Priority>('low')
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNote(e.target.value)
    }
    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPriority(e.target.value as Priority)

    }
    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        addNote({
            id: uuidv4(),
            text: note,
            priority: priority
        })
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
                <button onClick={handleClick}>Add</button>
            </form>
        </div>
    )
}
export default AddNote