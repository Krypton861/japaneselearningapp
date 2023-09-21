import { QuizStack, QuestionCard } from "./QuizStack";
import { QuestionData } from "./QuizQuestionData";
import { QuestionType,QuestionTypeBoxes } from "./QuizQuestionType";
//Naming: QuizDeck vs QuizStack 
// Unused/Used vs New/Old bs Fresh/Spent

//This is the Main Class for Any form of Quiz. 
//Create Children of this class to create seperate Classes 
//where there are unique QuestionTypes or UI Elements.

//Can Generate a Quizstack to just use test this class -> QuizHandler.GenerateTestQuizStack()
//Is the Main Core Class to Handle all basic Quiz Functions. 
//Declare shared functions to inherited classes as protected. The Rest as Private
export class QuizHandler{
    FullQuizStack: QuizStack;
    UsedQuizStack: QuestionCard[];
    UnusedQuizStack: QuestionCard[];

    QuestionType:QuestionType; //comes later

    currQuestion:QuestionCard | null = null;

    constructor(quizStack: QuizStack, questionType:QuestionType = new QuestionTypeBoxes()){
        //Initialisiere den Handler. Set Questions. Shuffle Questions. 
        //Idea: Generate possible Answers depending on the Stack? - But what if stack too smalll?
        this.FullQuizStack = quizStack;
        this.UnusedQuizStack = quizStack.QuestionStack;
        this.UsedQuizStack = [];

        this.QuestionType = questionType;
    }

    //Gets a random new Question from the Unused Stack and places current Question on the Unused Stack
    public GetNewQuestion(){
        //poll Randomly
        if(this.UnusedQuizStack != null){
            let randomQuestionNr = Math.floor(Math.random() * this.UnusedQuizStack.length);
            this.currQuestion = this.UnusedQuizStack[randomQuestionNr];

            this.UsedQuizStack.push(this.currQuestion);
            
            let indexOfCurrent = this.UnusedQuizStack.indexOf(this.currQuestion);
            if (indexOfCurrent > -1) // only splice array when item is found
                this.UnusedQuizStack.splice(indexOfCurrent,1); // 2nd parameter means remove one item only
            
        }
        else
            return null;
        
        return this.currQuestion
    }

    public EvaluateAnswer(answerId:number, answerText:string) {
        //Take input (any form) and compare the answer to the correct answer of the current Question
        //If correct give points and load next question
        //If false??
        //console.log("SelectedAnswerID:" + answerId + " | CorrectAnswerID:" + this.currQuestion?.Question.CorrectAnswerIndex+ "\nAnswerText:" + answerText + " | CorrectAnswerText:" + this.currQuestion?.Question.CorrectAnswer);
       
        if(answerId == this.currQuestion?.Question.CorrectAnswerIndex){
            console.log("Answer is Correct");
            return true;
        }
        else{
            console.log("Answer is False");
            return false;
        }

    }



    //Call after finishing a question and evaluating. Will move Next Element to new Question
    private EndOfCurrQuestion(){
        //poll Randomly
        //this.UsedQuizStack.QuestionStack.push(this.currQuestion);

    }

    private LoadQuestionStack(quizStack: QuizStack){
        //Take whatever Input and generate the corrosponding class List
    }

    static GenerateTestQuizStack(){
        let TestQuizStack:QuestionData[] = [
            new QuestionData("What is the Hiragana: あ?","a",["i","u","e","o"]),
            new QuestionData("What is the Hiragana: め?","Me",["So","Mo","Nu","Ta"]),
            new QuestionData("What is the Hiragana: る?","Ru",["Ro","Mu","Ne","Yo"]),
            new QuestionData("What is the Hiragana: ろ?","Ro",["Ru","Mo","He","Mo"]),
        ];
       
        return new QuizStack(TestQuizStack);
    }

    //If the initialization of your class and the shuffling logic is happening in the component's constructor or within the component's render method, 
    //it will indeed re-initialize and shuffle when the component re-renders.
    componentDidMount(){

    }
}
