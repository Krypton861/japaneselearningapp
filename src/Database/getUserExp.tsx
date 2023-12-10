import React from "react";
import { getDoc, doc } from "firebase/firestore";
import db from "../Configs/initDB";

export default async function getUserExp(userID: string) {
  try {
    //THIS Gets a Specific Element in the DB
    const expCollectionRef = doc(db, 'exp', userID); // Use 'userID' to get the specific document
    const querySnapshot = await getDoc(expCollectionRef);
    //printResult(querySnapshot);

    if (querySnapshot.exists()) {
      const data = querySnapshot.data();
      return data?.expGained;
    } else {
      console.log("No such document!");
      return null;
    }
  }
  catch (error) {
    if (error instanceof Error && typeof error.message === 'string')
      console.log("Error:", error.message);
    else
      console.log("Error <getUserExp>:", error);
    return null;
  }

}