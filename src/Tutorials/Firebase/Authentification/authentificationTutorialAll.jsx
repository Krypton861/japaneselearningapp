import React, { useEffect, useState } from "react";
import { initializeApp } from 'firebase/app';
import {
  getAuth, onAuthStateChanged, signOut, createUserWithEmailAndPassword,
  signInWithEmailAndPassword, connectAuthEmulator
} from 'firebase/auth';

import app from "../Config/initFirebase";

export default function Authentification() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUser] = useState("")

  const auth = getAuth(app);
  //connectAuthEmulator(auth, "http://localhost:9099");

  //On Mount
  useEffect(() => {
    monitorAuthState();
  }, [])

  function handleSubmit(e) {
    e.preventDefault();
  }

  // Login using email/password
  const loginEmailPassword = async () => {
    // error handling
    try {
      await signInWithEmailAndPassword(auth, email, password)
    }
    catch (error) {
      console.log(`There was an error: ${error}`)
      //showLoginError(error)
    }
  }


  // Create new account using email/password
  const createAccount = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
    }
    catch (error) {
      console.log(`There was an error: ${error}`)
      //showLoginError(error)
    }
  }

  // Monitor auth state
  const monitorAuthState = async () => {
    onAuthStateChanged(auth, user => {
      if (user) {
        console.log("Logged in: " + user)
        setUser(user.uid + " | " + user.email);
        //showApp()
        //showLoginState(user)

        //hideLoginError()
        //hideLinkError()
      }
      else {
        //showLoginForm()
        console.log("You're not logged in.")
      }
    })
  }

  // Log out
  const logout = async () => {
    await signOut(auth);
    setUser("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>

        <label htmlFor="Email">Email</label>
        <input value={email} id="Email" type="email"
          onChange={e => setEmail(e.target.value)} />

        <label htmlFor="Password">Password</label>
        <input value={password} id="Password" type="password"
          onChange={e => setPassword(e.target.value)} />
      </form>

      <button onClick={loginEmailPassword} id="btnLogin">Log in</button>
      <button onClick={createAccount} id="btnSignup">Sign up</button>
      <button onClick={logout} id="btnLogout">Log out</button>

      <div>{user}</div>

    </>

  )
}
