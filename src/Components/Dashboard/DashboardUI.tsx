import React from 'react';
import { Box, Container, Grid, Paper } from '@mui/material';
import OverviewDecksUI from './OverviewDecksComponent';
import QuizDecksProvider from '../../Contexts/DecksContext';
import { useQuizDecksContext } from '../../Contexts/DecksContext';
import { useUserContext } from '../../Contexts/UserContext';
import CreateNewDeckComponent from './CreateNewDeckComponent';

const DashboardUI: React.FC = () => {
    const { quizDecks, addQuizDeck, isQuizDeckDataLoaded } = useQuizDecksContext();
    const { userData, setUserData } = useUserContext();

    if (!isQuizDeckDataLoaded) {
        // You can show a loading indicator or handle the loading state
        return <div>Loading...</div>;
    }


    const getPublicDecks = () => {
        return quizDecks.filter(element => element.baseData.authorID !== userData.userId);
    };

    const getOwnDecks = () => {
        return quizDecks.filter(element => element.baseData.authorID === userData.userId);
    };


    return (
        <div>
            <Container maxWidth="lg" style={{ height: '80vh', marginTop: '50px' }}>
                <Grid container spacing={5} style={{ height: '100%' }}>



                    {/* Second Section */}
                    <Grid item xs={12}>
                        <Paper style={{ height: 'auto' }}>
                            Public Decks
                            <OverviewDecksUI quizDecks={getPublicDecks()} />
                        </Paper>
                    </Grid>

                    {/* Third Section */}
                    <Grid item xs={12}>
                        <Paper style={{ height: 'auto' }}>
                            Your Decks + View Statistics
                            <OverviewDecksUI quizDecks={getOwnDecks()} />
                        </Paper>
                    </Grid>
                    {/* First Section */}
                    <Grid item xs={12}>
                        <Paper style={{ height: 'auto', marginBottom: '0' }}>
                            {/* Content for the first section */}
                            <CreateNewDeckComponent></CreateNewDeckComponent>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>

    );
};

export default DashboardUI;
