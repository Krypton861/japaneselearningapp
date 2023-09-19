import { QuizHandler } from "./QuizHandler";
import { QuizStack } from "./QuizStack";
import { QuizUI } from "./QuizUi";

export class QuizImplementation extends QuizHandler {
    //Every "Change" we want from the Normal behavior.

    constructor() {
        //Excecute the Constructor of parent Class: QuizHandler before everything else
        //Set DataSource for example - super I guess??        
        super(QuizHandler.GenerateTestQuizStack());

        //Now Add some stuff to Change
        //Set QuestionType
    }
}

export function QuizImplementationFunc {
    //Every "Change" we want from the Normal behavior.

    return (
        <QuizUI FullQuizStack={undefined} UsedQuizStack={null} UnusedQuizStack={null} QuestionType={undefined} currQuestion={null} GetNewQuestion={function (): void {
            throw new Error("Function not implemented.");
        }} EvaluateAnswer={function (answerId: number, answerText: string): void {
            throw new Error("Function not implemented.");
        }} EndOfCurrQuestion={function (): void {
            throw new Error("Function not implemented.");
        }} LoadQuestionStack={function (quizStack: QuizStack): void {
            throw new Error("Function not implemented.");
        }}></QuizUI>
    );
}