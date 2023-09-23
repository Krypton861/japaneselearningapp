import { collection, getFirestore } from "firebase/firestore";
import app from "../Config/initFirebase";

const db = getFirestore(app);

export const movieCollectionRef = collection(db,"Movies");

