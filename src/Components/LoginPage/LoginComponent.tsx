import React from 'react';

interface Props {
  onLogin: () => void;
  disabled: boolean;
}

const LogInComponent: React.FC<Props> = ({ onLogin, disabled }) => (
  <button onClick={onLogin} disabled={disabled}>Login</button>
);


export default LogInComponent;
