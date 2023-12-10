import React, { ChangeEvent, useState } from 'react';

interface Props {
  label: string;
  type: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isDisabled?: boolean;
}

//Sets the Label, Type and Value and the onChange Element of an Input Field.
//If the type is "password" - an extra Button to hide and show the Password is added
const InputComponent: React.FC<Props> = ({ label, type, value, onChange, isDisabled=false }) => {
  const [showPassword, setShowPassword] = useState(false);
  //isPassword checks if the input type should be a password field. 
  //If type === 'password', then isPassword will be true.
  //const isPassword = type === 'password'; //REPLACE for type === 'password' in Code. But this is more complex
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  if (isDisabled) {
    return null; // Render nothing if isVisible is false
  }

  return (
   
    <div>
      <label>{label}:</label>
      <input 
        type={type === 'password' && showPassword ? 'text' : type} 
        value={value} 
        onChange={onChange} 
      />
      {type === 'password' && (
        <button type="button" onClick={togglePasswordVisibility}>
          {showPassword ? 'Hide' : 'Show'}
        </button>
      )}
    </div>
  );
};

export default InputComponent;
