import React, { useState, ChangeEvent, FormEvent } from 'react';
import InputComponent from './InputComponent';
import LogoutComponent from './LogoutComponent';
import SignUpComponent from './SignUpComponent';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
    console.log("Username:", username);
    console.log("Password:", password);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleSignUp = () => {
    console.log("Sign Up clicked");
  };

  return (
    <div>
      <h2>Login Page</h2>
      {isLoggedIn ? (
        <LogoutComponent onLogout={handleLogout} />
      ) : (
        <form onSubmit={handleSubmit}>
          <InputComponent 
            label="Username" 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
          <InputComponent 
            label="Password" 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <button type="submit">Login</button>
        </form>
      )}
      <SignUpComponent onSignUp={handleSignUp} />
    </div>
  );
};

export default LoginPage;
