import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import db from "./initFirebase";

export default function AddMovie() {
    const [name, setName] = useState("")

    function handleSubmit(e){
        e.preventDefault();
        if(name=== "")
            return;

        const movieCollectionRef = collection(db, "Movies"); //second one is Collection Name

        addDoc(movieCollectionRef,{Name:name})
            .then(response => {
                console.log("responseID:" + response.id + " | " + response)
            }).catch(error => {
                console.log(error.message);
            })
            console.log("Added Movie Name: " + name)
    }

    return (
        <div>
            <h5>AddMovie</h5>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name"></label>
                <input 
                    id="name"
                    type="text" 
                    value={name}
                    onChange={e => setName(e.target.value)}/>
                    <button type="submit">Add Movie</button>
            </form>
        </div>
    )
}