import { QuizStack, QuestionCard } from "./QuizStack";
import { QuestionData } from "./QuizQuestionData";
import { QuestionType,QuestionTypeBoxes } from "./QuizQuestionType";
//Naming: QuizDeck vs QuizStack 
// Unused/Used vs New/Old bs Fresh/Spent

//This is the Main Class for Any form of Quiz. 
//Create Children of this class to create seperate Classes 
//where there are unique QuestionTypes or UI Elements.

//Can Generate a Quizstack to just use test this class -> QuizHandler.GenerateTestQuizStack()
export class QuizHandler{
    FullQuizStack: QuizStack;
    UsedQuizStack: QuizStack | null = null;
    UnusedQuizStack: QuizStack | null = null;

    QuestionType:QuestionType; //comes later

    currQuestion:QuestionCard | null = null;

    constructor(quizStack: QuizStack, questionType:QuestionType = new QuestionTypeBoxes()){
        //Initialisiere den Handler. Set Questions. Shuffle Questions. 
        //Idea: Generate possible Answers depending on the Stack? - But what if stack too smalll?
        this.FullQuizStack = quizStack;
        this.UnusedQuizStack = quizStack;
        this.UsedQuizStack = null;

        this.QuestionType = questionType;


        //After everything is Set up. Pull the first Question
        this.GetNewQuestion();
    }

    //Gets a random new Question from the Unused Stack and places current Question on the Unused Stack
    public GetNewQuestion(){
        //poll Randomly
        if(this.UnusedQuizStack != null && this.UnusedQuizStack.QuestionStack.length > 0){
            let randomQuestionNr = Math.random() * this.UnusedQuizStack.QuestionStack.length;
            this.currQuestion = this.UnusedQuizStack.QuestionStack[randomQuestionNr];

            this.UsedQuizStack!.QuestionStack.push(this.currQuestion);
        }
    }

    public EvaluateAnswer(answerId:number, answerText:string) {
        //Take input (any form) and compare the answer to the correct answer of the current Question
        //If correct give points and load next question
        //If false??
        /*if(this.currQuestion.Question.CorrectAnswer === answerText)
            this.currQuestion.IsCorrect = true;
        else
            this.currQuestion.IsCorrect = false;

        this.currQuestion.GivenAnswer = answerText;
        this.currQuestion.IsAnswered = true;

        this.EndOfCurrQuestion();*/
    }



    //Call after finishing a question and evaluating. Will move Next Element to new Question
    EndOfCurrQuestion(){
        //poll Randomly
        //this.UsedQuizStack.QuestionStack.push(this.currQuestion);

    }

    LoadQuestionStack(quizStack: QuizStack){
        //Take whatever Input and generate the corrosponding class List
    }

    static GenerateTestQuizStack(){
        let TestQuizStack:QuestionData;

        let newQuestion = new QuestionData(
            "What is my first Name?","Peter",["Pedro","Peeeta","Pjodre"]);

        for(let i = 0; i<10; i++){
            //Generate Questions dynamicalls
            //TestQuizStack.push(newQuestion);
        }
        return new QuizStack([newQuestion]);
    }
}
