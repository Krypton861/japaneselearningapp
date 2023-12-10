import React from "react";
import { getDoc, doc, getDocs, collection, QueryDocumentSnapshot, DocumentData } from "firebase/firestore"; 
import db from "../Configs/initDB";
import printResult from "./printResult";

export interface DeckListDBInterface {
  id: string;
  DeckID: string;
  Author: string;
  // Add other fields as needed
}

export default async function getSingleDeck(deckID: string) {
    try {
       
      const expCollectionRef = doc(db, 'quizDecks', deckID,'Cards','CardIDOderSO'); // Use 'userID' to get the specific document
      const querySnapshot = await getDoc(expCollectionRef);
  
      //const messageRef = doc(db, "rooms", "roomA", "messages", "message1");
      //const querySnapshot = await getDocs(collection(db, "quizDecks"));
      //printResult(querySnapshot);

      if (querySnapshot.exists()) {
        const data = querySnapshot.data();
        return data;
      } else {
        console.log("No such document!");
        return null;
      }

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