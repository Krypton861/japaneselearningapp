import React from 'react';

interface Props {
  onSignUp: () => void;
  disabled: boolean;
}

const SignUpComponent: React.FC<Props> = ({ onSignUp, disabled }) => (
  <button onClick={onSignUp} disabled={disabled}>Sign Up</button>
);


export default SignUpComponent;
