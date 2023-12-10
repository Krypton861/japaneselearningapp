import { collection, getFirestore } from "firebase/firestore";
import db from "./initDB";

export const movieCollectionRef = collection(db,"Movies");
export const expCollectionRef = collection(db,"exp");
export const userCollectionRef = collection(db,"users");

