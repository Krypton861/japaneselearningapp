import React, { useState } from "react";
import { movieCollectionRef } from "./firestore.collections";
import { addDoc, doc, updateDoc } from "firebase/firestore";
import db from "./initFirebase";

export default function EditMovie() {
    const [name, setName] = useState("")
    const [id, setID] = useState("")

    function handleSubmit(e){
        e.preventDefault();
        if(name=== "" || id === "")
            return;

        console.log("Name:" + name + " | id: " + id);
        const docRef = doc(db,"Movies", id);

        updateDoc(docRef,{Name:name})
            .then(response => {
                console.log(response)
            }).catch(error => {
                console.error(error.message);
            })


    }

    return (
        <div>
            <h5>Edit Movie</h5>
            <form onSubmit={handleSubmit}>
                <label htmlFor="id">MovieID</label>
                <input 
                    id="id"
                    type="text" 
                    value={id}
                    onChange={e => setID(e.target.value)}/>
                
                <label htmlFor="name">Movie Name</label>
                <input 
                    id="name"
                    type="text" 
                    value={name}
                    onChange={e => setName(e.target.value)}/>

                <button type="submit">Edit Movie</button>
            </form>
        </div>
    )
}