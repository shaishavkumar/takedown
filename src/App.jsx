import React, { useState } from 'react';
import Header from './Header';
import CreateNote from './CreateNote';
import Note from './Note';

const App = () => {
    const [addItem, setAddItem] = useState([]);
    const addNote = (note) => {
        setAddItem((oldData) => {
            return [...oldData, note]
        });

        console.log(note);
        // alert("Submitted");
    }

    const onDelete = (id) => {
        setAddItem((oldItems) =>{
            return oldItems.filter((arrElement,index) =>{
                return index!== id;
            })
        })
    }

    return (
        <>
            <Header></Header>
            <CreateNote passNote={addNote}></CreateNote>
            {/* <Note></Note> */}
            {addItem.map((val, index) => {
                return <Note key={index}
                    id={index}
                    title={val.title}
                    content={val.content}
                    deleteItem={onDelete}></Note>

            })}
        </>
    );
}
export default App;