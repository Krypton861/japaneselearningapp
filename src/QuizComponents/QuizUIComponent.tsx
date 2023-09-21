import React from "react";
import { QuestionCard } from "./QuizStack";

//Interface for the Component for clear documented Data Types
interface QuizUiComponentProps {
    currentQuestion?: {
        currentQuestion: QuestionCard | null;
    };
    selectedAnswer: {
        selectedAnswerText: string;
        isCorrect:boolean;
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

    return (
        <div>
            <div>
                {questionCard.Question.QuestionText}
                __TIP: {questionCard.Question.CorrectAnswerIndex}
            </div>
            {questionCard.Question.allAnswerOptions.map((option, optionIndex) => (
                <button key={optionIndex}
                    onClick={() => {
                        onAnswerClick(optionIndex, option);
                    }}
                >
                    {option}
                </button>
            ))}

            <p>{selectedAnswer?.selectedAnswerText} IS {selectedAnswer?.isCorrect.toString()}</p>

        </div>
    );
};

export default QuizUiComponent;
