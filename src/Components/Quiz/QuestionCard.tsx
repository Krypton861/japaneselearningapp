import { QuestionData } from "./QuizQuestionData";
import { QuestionType, QuestionTypeBoxes } from "./QuizQuestionType";

export class QuestionCard {
    Question: QuestionData;
    UniqueQuestionID: number; // some Int I dont care which. Just simple
    IsAnswered: boolean | null = null;
    IsCorrect: boolean | null = null;
    GivenAnswer: string | null = null;

    //Here we put a class that tells us what kind of Question we do.
    // So Simple Buttons vs COnnection Dots vs drawing
    //MAYBE THIS IS NOT really the place to define it but we will see.
    QuestionType: QuestionType;

    constructor(questionData: QuestionData, id:number, questionType: QuestionType) {
        this.Question = questionData;
        this.UniqueQuestionID = id;
        this.QuestionType = new QuestionTypeBoxes();
    }
}
