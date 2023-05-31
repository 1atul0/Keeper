import React, { useState } from 'react'
import Header from './Header'
import Note from './Note';
import Footer from './Footer';
// import notes from "../notes"
import CreateArea from "./CreateArea"
//this is 
// function createNotes(note){
//   return <Note key={note.key} title={note.title} content={note.content}/>
// }

function App(){
  const [notes,setNotes]=useState([]);
  function addNote(newNote){
    // console.log(note);
    setNotes((prevNotes)=>{
      return [...prevNotes,newNote];
    });
  }
  function deleteNote(id){
    console.log("call for delete");
    setNotes((prevNotes)=>{
      return prevNotes.filter((note,index)=>{
        
        return id!==index;
      })
    })
  }
  return <div>
    <Header/>
    <CreateArea onAdd={addNote}/>
    {notes.map((note,index)=><Note onDelete={deleteNote}key={index} id={index}title={note.title} content={note.content}/> )}
    <Footer/>
    </div>;
}
export default App;