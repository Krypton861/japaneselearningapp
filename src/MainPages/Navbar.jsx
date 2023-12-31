import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; // Import your CSS file
import ProfileIcon from '../Components/UserProfile/ProfileIcon';
import { useUserContext } from '../Contexts/UserContext';



//The Navbar is put on top of Everything inside the app.jsx file. Edit with Caution.
//Links are dependent on the <Routes> that are defined in the app.jsx
export default function Navbar() {
  const navigate = useNavigate(); // Ensure this is inside a React function component

  //How to Navigate via Code:
  const navigateToLogin = () => {
    navigate('/login');
  };
  
  const { userData } = useUserContext();

  return (
    <>
      <div className="navbar">

        {/* Use the Link component to navigate to different views */}
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/quizz">Quizz</Link>
        <Link to="/login">Login</Link>
        <Link to="/test">Test</Link>

        <ProfileIcon></ProfileIcon>

      </div>

      <div>
      </div>
    </>
  );
}
