import React from "react";
import { QuizHandler } from "./QuizHandler";
import { QuizImplementation } from "./QuizImplementation";

//Take in a Quizhandler and bind all the Information to each UI Component.
//This is the connection between pure Logic (Quizhandler) and The UI
export function QuizUI(handler: QuizHandler){
    //let handler = new QuizImplementation();
    const { ID } = handler.currQuestion!;
    //let test = new QuizHandler(QuizHandler.GenerateTestQuizStack());

 
    return (
        <div>{ID}</div>
    );

}

/*export function QuizUI(handler: QuizHandler){
    const { ID } = handler.currQuestion;
}*/