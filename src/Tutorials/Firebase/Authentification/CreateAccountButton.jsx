import auth from "../Config/initAuth";
import { createUserWithEmailAndPassword } from 'firebase/auth';
  
export default function CreateAccountButton({email:email, password:password}) {

  // Create new account using email/password
  const createAccount = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
    }
    catch (error) {
        console.log("Error while trying to Create Account. Error:" + error);
    }
  }

  return (
    <>
      <button onClick={createAccount}>
        Create Account
      </button>
    </>
  )
}
