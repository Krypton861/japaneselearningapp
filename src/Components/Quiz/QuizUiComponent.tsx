import React from "react";
import { QuestionCard } from "./QuestionCard";

//Interface for the Component for clear documented Data Types
interface QuizUiComponentProps {
    currentQuestion?: {
        currentQuestion: QuestionCard | null;
    };
    selectedAnswer: {
        selectedAnswerText: string;
        isCorrect: boolean;
    } | null;
    onAnswerClick: (optionIndex: number, option: string) => void; // Define the prop type
}

const QuizUiComponent: React.FC<QuizUiComponentProps> = ({
    currentQuestion,
    selectedAnswer,
    onAnswerClick,
}) => {
    //Only Render Question if Question is Available. Return otherwise
    if (currentQuestion == null || currentQuestion.currentQuestion == null) {
        return null;
    }
    const questionCard = currentQuestion.currentQuestion; // Safely access currentQuestion

    const answerButtonStyle: React.CSSProperties = {
        width: '51%', // Adjust width as needed
        backgroundColor: '#fcba03',
        fontSize: '1.5EM',
    };

    const answersContainerStyle: React.CSSProperties = {
        display: 'flex',
    };

    const questionContainerStyle: React.CSSProperties = {
        padding:'15px'
    };

    return (
        <div>
            <div style={questionContainerStyle}>
                {questionCard.Question.QuestionText}
                {/*__TIP: {questionCard.Question.CorrectAnswerIndex}*/}
            </div>

            <div style={answersContainerStyle}>
            {questionCard.Question.AllAnswerOptions.map((option, optionIndex) => (
                <button key={optionIndex} style={answerButtonStyle}
                    onClick={() => {
                        onAnswerClick(optionIndex, option);
                    }}
                >
                    {option}
                </button>
            ))}
            </div>

            <p>{selectedAnswer?.selectedAnswerText} IS {selectedAnswer?.isCorrect.toString()}</p>

        </div>
    );
};

export default QuizUiComponent;
