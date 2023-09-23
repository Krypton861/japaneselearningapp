import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
//import { getAuth, onAuthStateChanged } from 'firebase/auth'

//import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "./firebaseConfig";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//const analytics = getAnalytics(app);
//const db = getFirestore(app);
//const auth = getAuth(app);

export default app;

/*onAuthStateChanged(auth, user =>{
  if(user){
    console.log("Logged in");
  }
  else{
    console.error("No user");
  }
});*/