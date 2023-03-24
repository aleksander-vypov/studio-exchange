import React from 'react';
import TextField from '@mui/material/TextField';

type Props = {
  onChange: (e: string) => void;
  value: string;
  disabled: boolean;
};

const Input = ({ onChange, value, disabled }: Props) => {
  return (
    <TextField
      onChange={(e) => onChange(e.target.value)}
      value={value}
      label="Enter amount"
      variant="filled"
      disabled={disabled}
    />
  );
};

export default Input;
