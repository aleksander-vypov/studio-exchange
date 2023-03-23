import React from 'react';
import TextField from '@mui/material/TextField';

type Props = {
  onChange: (e: string) => void;
  value: string;
};

const Input = ({ onChange, value }: Props) => {
  return (
    <TextField
      onChange={(e) => onChange(e.target.value)}
      value={value}
      label="Enter amount"
      variant="filled"
    />
  );
};

export default Input;
