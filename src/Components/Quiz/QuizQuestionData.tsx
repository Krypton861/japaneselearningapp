
export interface QuestionDataInterface{
    QuestionText:string;
    CorrectAnswer:string;
    CorrectAnswerIndex: number;
    wrongAnswerOptions:string[];
    allAnswerOptions:string[];

    //successTip:string;
    //helpHimTip:string
}

export class QuestionData implements QuestionDataInterface {
    QuestionText:string;
    CorrectAnswer:string;
    CorrectAnswerIndex: number;
    wrongAnswerOptions:string[];
    allAnswerOptions:string[];

    constructor(questionText: string, correctAnswer: string, wrongAnswerOptions:string[]){
        this.QuestionText = questionText;
        this.wrongAnswerOptions = wrongAnswerOptions;
        this.CorrectAnswer = correctAnswer;

        //Take correct Answer and wrong Answer and create new List.
        this.allAnswerOptions = wrongAnswerOptions;
        this.allAnswerOptions.push(correctAnswer);
        //Shuffle all the Answer Options here so later at display and handeling it is all random allready
        this.allAnswerOptions.sort((a, b) => 0.5 - Math.random());
        this.CorrectAnswerIndex = this.allAnswerOptions.indexOf(this.CorrectAnswer);
    } 
}