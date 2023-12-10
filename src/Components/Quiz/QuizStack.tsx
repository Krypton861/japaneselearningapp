//Naming Question vs QuestionCard vs QuestionData 

import { QuestionCard } from "./QuestionCard";
import { QuestionData, QuestionDataInterface } from "./QuizQuestionData";
import { QuestionType, QuestionTypeBoxes } from "./QuizQuestionType";

//Takes an Array of Questions in. Must be more than one and less than ???
export class QuizStack {
    public QuestionStack: QuestionCard[] = [];

    constructor(stackOfQuestions: QuestionData[]) {
        if (stackOfQuestions.length < 1 || stackOfQuestions.length > 999)
            throw new Error("Question Stack given is not the right Size:" + stackOfQuestions.length);

        for (let i = 0; i < stackOfQuestions.length; i++) {
            let currQuestionCard = new QuestionCard(stackOfQuestions[i], i, new QuestionTypeBoxes());
            this.QuestionStack.push(currQuestionCard);
        }
    }


}

