import React from 'react';
import logo from './logo.svg';
import './App.css';
import QuizUI from './QuizComponents/QuizUi';
import UserProfileUI from './UserComponents/UserProfileUI';
import FirebaseMainFile from './Firebase/FirebaseMainFile';

function App() {

  return (
    <div className="App">
      <header className="App-header">

        <FirebaseMainFile></FirebaseMainFile>
        <UserProfileUI/>
        <QuizUI />
        
      </header>
    </div>
  );
}

export default App;
