import React, { useState, useEffect } from "react";
import { QuizHandlerImplementation } from "./QuizHandlerImplementation";
import QuizUiComponent  from "./QuizUIComponent";
import { QuestionCard } from "./QuizStack";


const quizImplementation = new QuizHandlerImplementation();

//Take in a Quizhandler and bind all the Information to each UI Component.
//This is the connection between pure Logic (Quizhandler) and The UI
const QuizUI: React.FC = () => {
    
    //#region Setup Hooks
    const [currentQuestion, setCurrentQuestion] = useState<{ currentQuestion: QuestionCard |null }>
            ({currentQuestion: quizImplementation.currQuestion});

    const [selectedAnswer, setSelectedAnswer] = useState<
        {
            selectedAnswerText: string;
            isCorrect: boolean;
        } | null>(null);

    //const updateSelectedAnswer = (data: { answerID: number, answerText: string}) => {
    const updateSelectedAnswer = (selectedAnswerText: string, isCorrect:boolean) => {

        setSelectedAnswer({
            selectedAnswerText: selectedAnswerText,
            isCorrect: isCorrect,
        });
    };

    
    //This useEffect is responsible for fetching data from a third Source when the component is mounted. It runs only once, BUT twice when Strict Mode is on 
    useEffect(() => {
        //Use for  a "step outside” of React and synchronize your components with some external system like a non-React widget 
    }, []); // The empty dependency array [] means it should run only once, but check for other dependencies in your component.

    //#endregion Setup Hooks
    
    const onAnswerClickFunction = (selectedIndex: number, selectedAnswerText: string) => {
        //const newQuestion = quizImplementation.GetNextQuestion();
        //setCurrentQuestion({ currentQuestion: newQuestion });
        let isCorrect = quizImplementation.EvaluateAnswer(selectedIndex,selectedAnswerText);

        updateSelectedAnswer(selectedAnswerText, isCorrect);
    };

    const finishQuestionn = () =>{
        const newQuestion = quizImplementation.GetNewQuestion();
        setCurrentQuestion({ currentQuestion: newQuestion });
        updateSelectedAnswer("",false);
    }

    return (
        <div>
            <QuizUiComponent
                currentQuestion={currentQuestion}
                selectedAnswer={selectedAnswer}
                onAnswerClick={onAnswerClickFunction}
            />
            <button onClick={finishQuestionn}>NEXT QUESTION. ListOfUnused: {quizImplementation.UnusedQuizStack.length}</button>

        </div>
    );
};
export default QuizUI;
