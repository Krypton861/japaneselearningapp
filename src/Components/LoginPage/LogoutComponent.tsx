import React from 'react';

interface Props {
  onLogout: () => void;
}

const LogoutComponent: React.FC<Props> = ({ onLogout }) => (
  <button onClick={onLogout}>Logout</button>
);

export default LogoutComponent;
