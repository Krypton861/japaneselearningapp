import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import UserProfileUI from './Components/UserProfile/UserProfileUI';
import LandingPage from './MainPages/LandingPage';
import Navbar from './MainPages/Navbar';
import LoginPage from './Components/LoginPage/LoginPageUI';
import { UserProvider } from './Contexts/UserContext';
import DashboardUI from './Components/Dashboard/DashboardUI';
import RandomTest from './Components/randomTest';
import QuizDecksProvider from './Contexts/DecksContext';
import QuizUIInitialisation from './Components/Quiz/QuizUiInitialisation';


function App() {

  return (
    <UserProvider>
      <QuizDecksProvider>

        <div className="App">
          <header className="App-header">
            <Router>

              <div style={{ position: 'fixed', top: 0 }}>
                <Navbar />
              </div>

              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/user" element={<UserProfileUI />} />
                <Route path="/quizz" element={<QuizUIInitialisation />} />
                <Route path="/dashboard" element={<DashboardUI />} />
                <Route path="/test" element={<RandomTest />} />

                {/* Catch-all route */}
                <Route path="*" element={<LandingPage />} />
              </Routes>


            </Router>



          </header>
        </div>
      </QuizDecksProvider>

    </UserProvider>
  );
}

export default App;

/*
        <FirebaseMainFile></FirebaseMainFile>
        <UserProfileUI />
        <QuizUI />

*/