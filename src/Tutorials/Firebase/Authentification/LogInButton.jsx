import React from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from "../Config/initAuth";

//Hot to use: <LogInButton email={email} password = {password}></LogInButton>

export default function LogInButton({email:email, password:password}) {

    // Login using email/password
    const loginEmailPassword = async () => {
        //Found 2 elements with non-unique id #name - Switch out Implementation... I Think
        signInWithEmailAndPassword(auth, email, password).then(() => {
            console.log("Log-In successful to User: " + email);
        }).catch((error) => {
            console.log("There was an error while Logging in: "+ error);
        });

        //Alternative Implementation
        /*try {            
            await signInWithEmailAndPassword(auth, email, password);
        }
        catch (error) {
            console.log("There was an error while Logging in: "+ error)
        }*/
    }

    return (
        <>
            <button onClick={loginEmailPassword}>
                Login
            </button>
        </>
    )
}

