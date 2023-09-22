import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import QuizUI from './Components/Quiz/QuizUi';
import UserProfileUI from './Components/UserProfile/UserProfileUI';
import LandingPage from './MainPages/LandingPage';
import Navbar from './MainPages/Navbar';
import LoginPage from './Components/LoginPage/LoginPage';

function App() {

  return (

    <div className="App">
      <header className="App-header">
        <Router>

        <div style={{ position: 'fixed', top: 0 }}>
          <Navbar/>
        </div>

          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/user-info" element={<UserProfileUI />} />
            <Route path="/product" element={<QuizUI />} />
            {/* Catch-all route */}
            <Route path="*" element={<LandingPage />} />
          </Routes>
        </Router>



      </header>
    </div>
  );
}

export default App;

/*
        <FirebaseMainFile></FirebaseMainFile>
        <UserProfileUI />
        <QuizUI />

*/