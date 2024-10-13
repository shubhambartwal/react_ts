export type Priority= 'high' | 'medium' | 'low' 
export type NoteProps = {
    id:string,
    text: string,
    priority: Priority,
    editNote:(id: string) => void,
    deleteNote:(id: string) => void
}
export type NoteType = {
    id:string,
    text: string,
    priority: Priority
}
export enum Color{
high='red',
medium='yellow',
low='green',
}