import React, { useEffect, useState } from "react";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import db from "./initFirebase";
import { movieCollectionRef } from "./firestore.collections";

export default function ListMovies() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies();
    }, [])

    function getMovies() {
        const movieCollectionRef = collection(db, "Movies"); //second one is Collection Name
        getDocs(movieCollectionRef)
            .then(response => {
                console.log(response.docs);
                const movs = response.docs.map(doc => ({
                    data: doc.data(),
                    id: doc.id,
                }));
                setMovies(movs);

            })
            .catch(error => console.log("Error:" + error.message))
    }

    function deleteMovie(id){
        const docRef = doc(db,"Movies",id);
        console.log("Deleting ID:" + id);
        deleteDoc(docRef)
            .then(()=> console.log("Documet Deleted"))
            .catch(error => console.error(error.message));
    }
   

    return (
        <div>
            <button onClick={() => getMovies()}>Refresh Mobies</button>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                        {movie.id} : 
                        {movie.data.Name}
                        <button onClick={() => deleteMovie(movie.id)}>DEL</button>
                    </li>
                ))}
            </ul>
            <h4>ListMovies</h4>
        </div>
    );
}
