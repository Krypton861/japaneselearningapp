import React from 'react';
import ListMovies from './listMovies';
import AddMovie from './addMovie';
import EditMovie from './EditMovie';
import RealtimeMovies from './RealtimeMovies';

export default function FirebaseMainFile() {
    return (
        <>
        <RealtimeMovies></RealtimeMovies>
            <ListMovies></ListMovies>
            <AddMovie></AddMovie>
            <EditMovie></EditMovie>
        </>
        
    );
}

