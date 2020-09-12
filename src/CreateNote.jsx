import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import EjectIcon from '@material-ui/icons/Eject';
import './index.css';

const CreateNote = (props) => {

    const [expand, setExpand] = useState(false);

    const [note,setNote] = useState({
        title:'',
        content:'',
    });


const inputEvent =(event) =>{

    const {name, value} = event.target;

    setNote((oldData) => {
      return{
          ...oldData,
          [name] : value,
      }
    })
    console.log(note);
}

const addEvent = () =>{
     props.passNote(note);
     setNote({
        title:'',
        content:'',
     })
}

const expandIt =() =>{
    setExpand(true);
}
const normal =() =>{
    setExpand(false);
}

    return (
        <>
            <div className="main_note">
                <form>
                {expand?
                    <input type="text" value={note.title} name ="title" onChange={inputEvent} placeholder="Title"  autoComplete="off"></input> :null}
                    <textarea  value={note.content} name="content" onChange={inputEvent} placeholder="Take a note..." onClick={expandIt}></textarea>
                    <div className="main_button">
                    {expand?
                    <Button className="add_btn" onClick={addEvent} style={{backgroundColor:"orange", color:"white",borderRadius:"20px"}}>
                        <AddIcon></AddIcon>
                    </Button> :null}
                    {expand?
                    <Button className="close_btn" onClick={normal} style={{backgroundColor:"#f74c31", color:"white", marginLeft:"10px", borderRadius:"20px"}}>
                    <EjectIcon></EjectIcon>
                    </Button> :null}
                    </div>
                </form>

            </div>
            <br></br><br></br><br></br>
        </>
    );
}
export default CreateNote;