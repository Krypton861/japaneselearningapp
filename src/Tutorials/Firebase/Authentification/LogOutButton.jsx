import { signOut } from "firebase/auth";
import auth from "../Config/initAuth";

export default function LogOutButton() {

  function logoutUser() {
    signOut(auth).then(() => {
      console.log("Log-out successful");
    }).catch((error) => {
      console.log("Error while trying to Log-out. Error:" + error);
    });    
  }

  return (
    <>
      <button onClick={logoutUser}>
        Logout
      </button>
    </>
  )
}


/*
//Can call the async function multiple ways
const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});

const logout = async () => {
  await signOut(auth);
  setUser("");
}
*/