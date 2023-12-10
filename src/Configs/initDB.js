import { getFirestore } from "firebase/firestore";
import app from "./initFirebase";

const db = getFirestore(app);

export default db;