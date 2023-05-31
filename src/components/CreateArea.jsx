import React ,{useState}from 'react'
function CreateArea(props){
  const [note,setNote]=useState({
    title:"",
    content:""
  });
  function handleChange(event){
    const {name,value}=event.target;
    //holod the prevValue of tilte or note
    setNote((prevValue)=>{
      return{
        ...prevValue,
        [name]:value
      }
    })
  }
  function submitNote(event){
    props.onAdd(note);
    setNote({title:"",content:""});//title and content get disappear after form submission
    event.preventDefault();//stop notes get refreshed after form submit
  }

  return <div>
   <form>
    <input onChange={handleChange} name="title" value={note.title}type='text' placeholder='Title'></input>
    <textarea onChange={handleChange} name="content"  value={note.content}placeholder='Take a note...'></textarea>
    <button onClick={submitNote}>Add</button>
   </form>
  </div>
}
export default CreateArea;