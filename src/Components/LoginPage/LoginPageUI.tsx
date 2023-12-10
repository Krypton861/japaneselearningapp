import React, { useState, FormEvent } from 'react';
import auth from '../../Configs/initAuth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import InputComponent from './InputComponent';
import LogoutComponent from './LogoutComponent';
import SignUpComponent from './SignUpComponent';
import LogInComponent from './LoginComponent';

import { useUserContext } from '../../Contexts/UserContext';

const LoginPage: React.FC = () => {

  //#region Firebase Authentification Logic
  const [email, setEmail] = useState<string>("mycoolemail@gmail.com");
  const [password, setPassword] = useState<string>("123456");
  const [passwordCheck, setPasswordCheck] = useState<string>("");
  const [isQuerying, setIsQuerying] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [stateIsLogin, setStateIsLogin] = useState(true);     //When first pressed Siogn In. Then Enable the second Password Column and Rules to check for Sign in instead of Login

  //From the Global Context File where we manage the USER Core Data
  const { userData, setUserData } = useUserContext();

  const handleSubmit = (e: FormEvent) => {
    //Any Button as the Login could be placed here and just button type="submit" to excecute the form
    e.preventDefault();
  };


  const handleLogin = async () => {
    if (!isAllowedToProceed()) {
      setErrorMessage("Dont Spamm die Login you Falafel");
      return;
    }

    //console.log("email:", email, "\nPassword:", password);
    setIsQuerying(true);

    try {
      const userData = await signInWithEmailAndPassword(auth, email, password);
      console.log("Log-In successful to UserID: " + userData.user.uid);

      setUserData({
        userId: userData.user.uid,
        email:email,
        userName: "UserName",
      });
    }
    catch (error) {
      //setErrorMessage("There was an error while Logging in: Error:" + error);
      setErrorMessage(mapFirebaseError(error));;
    }
    setIsQuerying(false);
  };

  const handleSignUp = async () => {
    //console.log("email:", email, "\nPassword:", password);
    
    //TODO: THIS IS STUPID. Seperate Login and Sign in and adjust the Input COmponent aswell.
    //When first pressed Siogn In. Then Enable the second Password Column and Rules to check for Sign in instead of Login
    if(stateIsLogin == true)
    {
      setStateIsLogin(false)
      return;
    }

    setIsQuerying(true);

    try {
      const userData = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Creating Account successfully. Logging in to UserID::" + userData.user.uid);
      setUserData({
        userId: userData.user.uid,
        email:email,
        userName: "",
      });
    }
    catch (error) {
      //setErrorMessage("Error while trying to Create Account. Error:" + error);
      setErrorMessage(mapFirebaseError(error));;
    }
    setIsQuerying(false);
  };

  const handleLogout = () => {
    signOut(auth).then(() => {
      console.log("Log-out successful.");

      setUserData({
        userId: null,
        email: null,
        userName: null,
      });
    }).catch((error) => {
      //setErrorMessage("Error while trying to Log-out. Error:" + error);
      setErrorMessage(mapFirebaseError(error));;
    });

  };

  //#endregion Firebase Authentification Logic

  //#region Imput Field Validation
  //Validating the Input for the Email and Password fields
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const handleEmailChange = (newEmail: string) => {
    setEmail(newEmail);
    setEmailError(validateEmail(newEmail) ? null : "Invalid email");
  };
  
  const handlePasswordChange = (newPassword: string) => {
    setPassword(newPassword);
    setPasswordError(validatePassword(newPassword, passwordCheck));
  };

  const handlePasswordCheckChange = (newPassword: string) => {
    setPasswordCheck(newPassword);
    setPasswordError(validatePassword(newPassword, password));
  };
    
  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };
  
  const validatePassword = (newPassword: string, otherPassword: string) => {
    if (newPassword.length < 4)
      return "Password must be at least 4 characters";
    else if(!stateIsLogin && (newPassword !== otherPassword))
      return "Passwords must be Identical to register";

    return null;
  };
  

  //#endregion Imput Field Validation

  //#region Rate Limiting / Error Output

  const [lastClickedTime, setlastClickedTime] = useState(0);

  //Prevent Spamm using Rate Limit - Every 1 Sec only allowerd
  const isAllowedToProceed = () => {    
    const now = Date.now();
    if (now - lastClickedTime < 1000) { // 1 - 3 seconds are ok
      return false;
    }  
    setlastClickedTime(now);
    return true;
  };

  //map Firebase error codes to more user-friendly messages
  const mapFirebaseError = (error: unknown) => {
    if (typeof error === 'object' && error !== null && 'code' in error) {
      const errorCode = (error as { code: string }).code;

      switch (errorCode) {
        case 'auth/invalid-login-credentials':
          return 'Invalid login credentials. Please try again.';
        case 'auth/invalid-email':
          return 'The email address is badly formatted.';
        case 'auth/user-not-found':
          return 'No user found with this email address.';
        case 'auth/wrong-password':
          return 'Incorrect password.';
        default:
          return 'An unknown error occurred.';
      }
    } else {
      return 'An unknown error occurred.';
    }
  };
  
  
  //#endregion Rate Limiting

  
  return (
    <div>
      <h2>Login Page</h2>
      {userData.userId  ? (
        <div>
          <div>
            Welcome {email}.<br /> You successfully logged in.
          </div>
          <LogoutComponent onLogout={handleLogout} />
        </div>

      ) : (
        <form onSubmit={handleSubmit}>
          <InputComponent
            label="Email"
            type="text"
            value={email}
            onChange={(e) =>handleEmailChange(e.target.value)}
          />
          {emailError && <div style={{ color: 'red' }}>{emailError}</div>}          
          
          <InputComponent
            label="Password"
            type="password"
            value={password}
            onChange={(e) => handlePasswordChange(e.target.value)}
          />
          
          <InputComponent
            label="Password"
            type="password"
            value={passwordCheck}
            onChange={(e) => handlePasswordCheckChange(e.target.value)}
            isDisabled = {stateIsLogin}
          />


          {passwordError && <div style={{ color: 'yellow' }}>{passwordError}</div>}
          {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
          {isQuerying ? <div>Loading...</div> : null}

          <LogInComponent onLogin={handleLogin} disabled={Boolean(emailError || passwordError || isQuerying)} />
          <SignUpComponent onSignUp={handleSignUp} disabled={Boolean(emailError || passwordError || isQuerying)} />
        </form>
      )}
    </div>
  );
};

export default LoginPage;

/*
Alternative Implementations where the async functions are more clear

createUserWithEmailAndPassword(auth, email, password).then(() => {
      console.log("Creating Account successfully. Email:" + email);
    }).catch((error) => {
      console.log("Error while trying to Create Account. Error:" + error);
    });


signInWithEmailAndPassword(auth, email, password).then(() => {
      console.log("Log-In successful to User: " + email);
      setIsLoggedIn(true);
    }).catch((error) => {
      console.log("There was an error while Logging in: Error:" + error);
      setIsLoggedIn(false);
    });
*/