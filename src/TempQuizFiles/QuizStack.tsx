//Naming Question vs QuestionCard vs QuestionData 

import { QuestionDataInterface, QuestionData } from "./QuizQuestionData";
import { QuestionType, QuestionTypeBoxes } from "./QuizQuestionType";

//Takes an Array of Questions in. Must be more than one and less than ???
export class QuizStack {
    public QuestionStack: QuestionCard[] = [];

    constructor(stackOfQuestions: QuestionDataInterface[]) {
        if (stackOfQuestions.length < 1 || stackOfQuestions.length > 999)
            throw new Error("Question Stack given is not the right Size:" + stackOfQuestions.length);

        for (let i = 0; i < stackOfQuestions.length; i++) {
            let currQuestionCard = new QuestionCard(stackOfQuestions[i], i, new QuestionTypeBoxes());
            this.QuestionStack.push(currQuestionCard);
        }
    }
}


export class QuestionCard {
    Question: QuestionDataInterface;
    ID: number; // some Int I dont care which. Just simple
    IsAnswered: boolean | null = null;
    IsCorrect: boolean | null = null;
    GivenAnswer: string | null = null;

    //Here we put a class that tells us what kind of Question we do.
    // So Simple Buttons vs COnnection Dots vs drawing
    //MAYBE THIS IS NOT really the place to define it but we will see.
    QuestionType: QuestionType;

    constructor(questionData: QuestionDataInterface, id:number, questionType: QuestionType) {
        this.Question = questionData;
        this.ID = id;
        this.QuestionType = new QuestionTypeBoxes();
    }
}
