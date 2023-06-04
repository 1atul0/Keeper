import React ,{useState}from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Zoom } from '@mui/material';
import Fab from '@mui/material/Fab';
function CreateArea(props){
  const [note,setNote]=useState({
    title:"",
    content:""
  });

  const [isExpanded,setIsExpanded]=useState(false);
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

  function Expand(){
    setIsExpanded(true);
  }

  return <div>
   <form className='create-note'>
    <input onChange={handleChange} onClick={Expand}name="title" value={note.title}type='text' placeholder={isExpanded?'Title':"Take a note..."}></input>
    {isExpanded&&<textarea onChange={handleChange}  name="content"  value={note.content}placeholder='Take a note...' rows={isExpanded?3:1}></textarea>}
    <Zoom in={true}>
    <Fab color='primary' onClick={submitNote}>
      < AddIcon/>
    </Fab>
    </Zoom>
   </form>
  </div>
}
export default CreateArea;