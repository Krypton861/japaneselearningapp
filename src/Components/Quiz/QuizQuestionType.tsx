//THIS IS CURRENTLY NOT USED AND USELESS!!!

export interface QuestionType{
    //Here we put a class that tells us what kind of Question we do.
    // So Simple Buttons vs COnnection Dots vs drawing
    
    //So custom Logic that defines how we evaluate the answer...
    HowToRenderReact():string;

    EvaluateAnswerOREvaluateClick():string;

    ConvertClickIntoDefaultResponse():string;
}

export class QuestionTypeBoxes implements QuestionType{
    HowToRenderReact():string {
        throw new Error("Method not implemented.");
    }
    EvaluateAnswerOREvaluateClick():string {
        throw new Error("Method not implemented.");
    }
    ConvertClickIntoDefaultResponse():string {
        throw new Error("Method not implemented.");
    }

}