import React, { ChangeEvent } from 'react';

interface Props {
  label: string;
  type: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputComponent: React.FC<Props> = ({ label, type, value, onChange }) => (
  <div>
    <label>{label}:</label>
    <input type={type} value={value} onChange={onChange} />
  </div>
);

export default InputComponent;
