import './Notes.css'
import Card from '../card/Card'
import { NoteProps, Color, NoteType } from './notes-type'
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
export default function Note(props: NoteProps) {
    return (
        <Card bgColor={props.priority && Color[props.priority]}>
            <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center'
            }}>
                <div>{props.text}</div>
                <div style={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer'
                }}>
                    <div ><MdEdit onClick={() => { props.editNote(props.id)}} /></div>
                    <div style={{ marginLeft: '1rem' }}><MdDeleteForever onClick={()=>props.deleteNote(props.id)}/></div>
                </div>
            </div>
        </Card>
    );
}