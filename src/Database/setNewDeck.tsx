import { collection, addDoc  } from "firebase/firestore"; 
import db from "../Configs/initDB";
import { QuestionDataInterface } from "../Components/Quiz/QuizQuestionData";
import { DeckDataInterface } from "../Contexts/DecksContext";



//TODO: Seperate QuestionData into a colelction of the Deck so it does not load unnessesssary Data
//Creates a mew collection with a random ID in quizDecks
export async function setNewDeck(newDeckData: DeckDataInterface ) {
    //DeckData: newDeckDataInterface, questionData:QuestionDataInterface[] 
    try {
        const quizDecksCollection = collection(db, 'quizDecks');
        await addDoc(quizDecksCollection, { baseData: newDeckData.baseData, questionData: newDeckData.questionData });
      return true;
    } catch (error) {
      console.log("Error:", error);
      return false;
    }
  }
  