import './Notes.css'
import {NoteProps} from './notes-type'
export default function Note( props: NoteProps ) {
    return (<div className={`note ${props.priority}`}>{props.text}</div>);
}