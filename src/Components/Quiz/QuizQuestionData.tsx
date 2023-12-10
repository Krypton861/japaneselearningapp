
//This Interface is the bare minimum to create a QuestionCard/Data. Use it while creating. 
//All other info gets added in QuestionData COnstuctor
export interface QuestionDataInterface{
    QuestionText:string;
    CorrectAnswer:string;
    WrongAnswerOptions:string[];
}

export class QuestionData implements QuestionDataInterface {
    QuestionText:string;
    CorrectAnswer:string;
    CorrectAnswerIndex: number;
    WrongAnswerOptions:string[];
    AllAnswerOptions:string[];

    constructor(questionText: string, correctAnswer: string, wrongAnswerOptions:string[]){
        this.QuestionText = questionText;
        this.WrongAnswerOptions = wrongAnswerOptions;
        this.CorrectAnswer = correctAnswer;

        //Take correct Answer and wrong Answer and create new List.
        this.AllAnswerOptions = wrongAnswerOptions;
        this.AllAnswerOptions.push(correctAnswer);
        //Shuffle all the Answer Options here so later at display and handeling it is all random allready
        this.AllAnswerOptions.sort((a, b) => 0.5 - Math.random());
        this.CorrectAnswerIndex = this.AllAnswerOptions.indexOf(this.CorrectAnswer);
    } 
}