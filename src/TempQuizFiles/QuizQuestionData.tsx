
export interface QuestionDataInterface{
    QuestionText:string;
    CorrectAnswer:string;
    wrongAnswerOptions:string[];
}

export class QuestionData implements QuestionDataInterface {
    QuestionText:string;
    CorrectAnswer:string;
    wrongAnswerOptions:string[];

    constructor(questionText: string, correctAnswer: string, wrongAnswerOptions:string[]){
        this.QuestionText = questionText;
        this.wrongAnswerOptions = wrongAnswerOptions;
        this.CorrectAnswer = correctAnswer;
    } 
}