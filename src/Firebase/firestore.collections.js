import { collection } from "firebase/firestore";
import db from "./initFirebase";

export const movieCollectionRef = collection(db,"Movies");

