import React, { useEffect, useState } from "react";
import { onSnapshot } from "firebase/firestore";
import { movieCollectionRef } from "../../../Configs/firestoreDBCollections";

export default function RealtimeMovies() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        //get a subscription to the snapshot
        const unsubscribe = onSnapshot(movieCollectionRef,snapshot =>{
            setMovies(snapshot.docs.map(doc => ({id: doc.id, data: doc.data})));
        });


        //On Unmount unsubscribe. Otherwise we subscripe multiple times
      return () => {
        
      }
    }, [])
    
    return (
        <div>
            <h4>RealtimeMovies</h4>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                        {movie.id} : {movie.data.Name}
                    </li>
                ))}
            </ul>

        </div>
    )
}