import React from 'react';
import ListMovies from './Database/listMovies';
import AddMovie from './Database/addMovie';
import EditMovie from './Database/EditMovie';
import RealtimeMovies from './Database/RealtimeMovies';
import LoginPage from './Authentification/LoginPage';

export default function FirebaseMainFile() {
    return (
        <>
            <LoginPage></LoginPage>

            <RealtimeMovies></RealtimeMovies>
            <ListMovies></ListMovies>
            <AddMovie></AddMovie>
            <EditMovie></EditMovie>
        </>
        
    );
}

