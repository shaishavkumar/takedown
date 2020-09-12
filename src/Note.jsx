import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import './index.css'
import { Button } from '@material-ui/core';

const Note = (props) => {
    const deleteNote =() =>{
        props.deleteItem(props.id);
    }
    return (
        <>
            <div className="note_main">
            <div className="note">
                    <h3 style={{textTransform:"capitalize"}}>{props.title}</h3>
                    <br></br>
                    <p style={{padding:"5px 0", textTransform:"capitalize"}}>{props.content}</p>
                    <Button style={{color: "#f74c31", borderRadius: "50px"}} onClick={deleteNote}>
                    <DeleteOutlineIcon className="deleteIcon"></DeleteOutlineIcon>
                    </Button>
                    </div>
            </div>
        </>
    );
}
export default Note;