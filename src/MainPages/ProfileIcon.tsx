import React from 'react';
import { useNavigate } from 'react-router-dom';
 

const ProfileIcon: React.FC = () => {
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate('/profile');
  };

  return (
    <div onClick={goToProfile} style={{ cursor: 'pointer' }}>
      <img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="Profile" width="50" />
    </div>
  );
};

export default ProfileIcon;
