import React from 'react';

interface Props {
  onSignUp: () => void;
}

const SignUpComponent: React.FC<Props> = ({ onSignUp }) => (
  <button onClick={onSignUp}>Sign Up</button>
);

export default SignUpComponent;
