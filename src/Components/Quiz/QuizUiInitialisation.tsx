import React, { useState, useEffect, useRef } from "react";
import { QuizHandlerImplementation } from "./QuizHandlerImplementation";

import { useLocation } from "react-router-dom";
import QuizUI from "./QuizUi";
import { QuizHandler } from "./QuizHandler";
import getFullDeckList from "../../Database/getFullDeckList";
import { QuizStack } from "./QuizStack";
import getSingleDeck from "../../Database/getSingleDeck";
import { useQuizDecksContext } from "../../Contexts/DecksContext";

interface StateType {
    deckID: string;
    authorID: string;
}
// Access the passed state variable (e.g., questionId)
//const deckID = state?.deckID;
//const authorID = state?.authorID;
//console.log("Quiz Startup Data: " + deckID + " | authorID: " + authorID);


//Take in a Quizhandler and bind all the Information to each UI Component.
//This is the connection between pure Logic (Quizhandler) and The UI
const QuizUIInitialisation: React.FC = () => {
    const { quizDecks } = useQuizDecksContext();

    // Access the passed state variable from the COmponent that started this.
    const location = useLocation();
    const { state } = location;


    // Create a ref to store the previous state
    const prevState = useRef<StateType | undefined>();
    //When the State is updated -> WHen in the Dashboard "Play" is pressed on an Element. 
    useEffect(() => {
        // Check if state has changed
        if (state !== null && state !== prevState.current) {
            //console.log('State for the QuizData Initialisation:', state);
            prevState.current = state;

            //Get Data from DB
            //quizImplementation.updateQuizData();
            //quizImplementation.constructor(); 
            //console.log("Question: " + test.currQuestion);
            /*getFullDeckList().then((response)=> {
                console.log(response);
                if(response !== null){
                    var Set = QuizHandler.createQuizStackFromData();
                    var test = new QuizHandlerImplementation(Set);

                    setQuizImplementation(test);

                    console.log("PGwRQYeTiMOrJZVntYOn | " +response[0].id);
                    //var test2 = getSingleDeck(response[0].id).then((singleDeck) => {
                    //    console.log(singleDeck);
                    //}) 
                }                
            });*/
            
            const quizIndex = quizDecks.findIndex((item) => item.id === state?.deckID);
            if(quizIndex == -1 || quizDecks[quizIndex] === null)
                return;

            var Set = QuizHandler.createQuizStackFromData(quizDecks[quizIndex]);
            var quizHanlder = new QuizHandlerImplementation(Set);

            setQuizImplementation(quizHanlder);

        }
    }, [state]);
    
    const [quizImplementation, setQuizImplementation] = useState<QuizHandler | null>(null);
    //const quizImplementation = new QuizHandlerImplementation();


    return (
        <div>
            {quizImplementation === null ? (
                <div>
                   <div>Loading Deck... <br/>Or Waiting for User to select a Deck</div>
                </div>
            ) : (
                <div>
                    <QuizUI
                        quizData = {quizImplementation}
                    />
                </div>
            )}
        </div>
    );
};
export default QuizUIInitialisation;
