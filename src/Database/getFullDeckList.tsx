import React from "react";
import { getDoc, doc, getDocs, collection, QueryDocumentSnapshot, DocumentData } from "firebase/firestore"; 
import db from "../Configs/initDB";
import printResult from "./printResult";
import { DeckDataInterface } from "../Contexts/DecksContext";


export default async function getFullDeckList() {
    try {
      //'PGwRQYeTiMOrJZVntYOn','Cards','CardIDOderSO '
      //const querySnapshot = await getDocs(collection(db, "quizDecks",'PGwRQYeTiMOrJZVntYOn','Cards'));
      const querySnapshot = await getDocs(collection(db, "quizDecks"));
      //printResult(querySnapshot);

      if (querySnapshot.empty) {
        console.log("No documents found in the 'quizDecks' collection.:");
        return null;
      }
      
      //printResult(querySnapshot);
      // Iterate over each document in the collection and build the result object
      const newData:DeckDataInterface[] = querySnapshot.docs.map((doc) => ({
        id:doc.id,
        baseData:{
          name: doc.data().baseData.level,
          description: doc.data().baseData.description,
          level: doc.data().baseData.level,
        
          authorName: doc.data().baseData.authorName,
          authorID: doc.data().baseData.authorID,
          numOfCards: doc.data().baseData.numOfCards,
          creationDate: doc.data().baseData.creationDate,        
        },
        questionData: doc.data().questionData.map((question: any) => ({
          // Update the following properties based on your QuestionDataInterface
          // For example: questionText, answer, etc.
          QuestionText: question.QuestionText,
          CorrectAnswer: question.CorrectAnswer,
          WrongAnswerOptions: question.WrongAnswerOptions,
        })),

      }));
      //Access Values like this;
      /*getFullDeckList().then((response)=> {
        if(response !== null){
            console.log(response[0].Author);
            console.log(response[0].DeckID);
            console.log(response[0].id);
      }*/

      /*
      OldVersion:
       const newData:DeckListInterface[] = querySnapshot.docs.map((doc) => ({
        ...doc.data() as DeckListInterface,
      }));
      */
      return newData;

    } catch (error : any) {
      // Handle errors during data retrieval
      console.error('Error fetching data from Firestore:', error);
  
      // You can add additional error handling logic here
      if (error.code === 'permission-denied') {
        console.error('Permission denied. Make sure your Firestore rules allow read access.');
        return null;
      } else {
        console.error('Unexpected error: ' + error.message);
        return null;
      }
    }
      
}