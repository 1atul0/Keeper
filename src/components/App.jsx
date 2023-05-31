import React from 'react'
import Header from './Header'
import Note from './Note';
import Footer from './Footer';
import notes from "../notes"
import CreateArea from "./CreateArea"
//this is 
// function createNotes(note){
//   return <Note key={note.key} title={note.title} content={note.content}/>
// }

function App(){
  return <div>
    <Header/>
    <CreateArea/>
    {notes.map(note=><Note key={note.key} title={note.title} content={note.content}/>)}
    <Footer/>
    </div>;
}
export default App;