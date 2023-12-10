import React, { useState, useEffect, useRef } from "react";
import { QuizHandlerImplementation } from "./QuizHandlerImplementation";
import QuizUiComponent from "./QuizUiComponent";
import { QuestionCard } from "./QuestionCard";
import { QuizHandler } from "./QuizHandler";


interface QuizUIProps {
    quizData: QuizHandler;
}
//Take in a Quizhandler and bind all the Information to each UI Component.
//This is the connection between pure Logic (Quizhandler) and The UI
const QuizUI: React.FC<QuizUIProps> = ({quizData}) => {

    //const [quizData, setquizData] = useState<QuizHandler | null>(null);
    //const quizData = new QuizHandlerImplementation();


    //#region Setup Hooks
    const [currentQuestion, setCurrentQuestion] = useState<{ currentQuestion: QuestionCard | null }>
        ({ currentQuestion: quizData.currQuestion });

    const [selectedAnswer, setSelectedAnswer] = useState<{
            selectedAnswerText: string;
            isCorrect: boolean;
        } | null>(null);


    const updateSelectedAnswer = (selectedAnswerText: string, isCorrect: boolean) => {
        setSelectedAnswer({
            selectedAnswerText: selectedAnswerText,
            isCorrect: isCorrect,
        });
    };
    //#endregion Setup Hooks

    const onAnswerClickFunction = (selectedIndex: number, selectedAnswerText: string) => {
        //const newQuestion = quizData.GetNextQuestion();
        //setCurrentQuestion({ currentQuestion: newQuestion });
        let isCorrect = quizData.EvaluateAnswer(selectedIndex, selectedAnswerText);

        updateSelectedAnswer(selectedAnswerText, isCorrect);
    };

    const finishQuestionn = () => {
        const newQuestion = quizData.GetNewQuestion();
        setCurrentQuestion({ currentQuestion: newQuestion });
        updateSelectedAnswer("", false);
    }



    const nextButtonStyle: React.CSSProperties = {
        width: 'auto', // Adjust width as needed

        fontSize: '1.5EM',
    };

    return (
        <div>
            <QuizUiComponent
                currentQuestion={currentQuestion}
                selectedAnswer={selectedAnswer}
                onAnswerClick={onAnswerClickFunction}
            />
            <button onClick={finishQuestionn} style={nextButtonStyle}>Next Question</button>
            <div>Questions Left: {quizData.UnusedQuizStack.length}</div>
        </div>
    );
};

export default QuizUI;
