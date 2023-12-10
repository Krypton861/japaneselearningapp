import { DocumentData, QuerySnapshot } from "firebase/firestore";

export default function printResult(querySnapshot : QuerySnapshot<DocumentData, DocumentData>) {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
}
   