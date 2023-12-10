import { setDoc, doc } from "firebase/firestore"; 
import db from "../Configs/initDB";


export async function setUserExp(userID: string, expGained: number) {
    try {
      const expRef = doc(db, 'exp', userID);
      await setDoc(expRef, { expGained }, { merge: true });
      return true;
    } catch (error) {
      console.log("Error:", error);
      return false;
    }
  }
  