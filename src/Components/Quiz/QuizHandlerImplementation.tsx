import { QuizHandler } from "./QuizHandler";
import { QuizStack } from "./QuizStack";

//Inherit the Quizhandler to create a specialized Version of the Handler 
//to add or override specific functionalities without modifying the core logic of the base class
export class QuizHandlerImplementation extends QuizHandler {
    constructor(quizStack: QuizStack) {
        super(quizStack);
    }
}

