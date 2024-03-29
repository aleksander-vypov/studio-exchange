import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';

type Props = {
  onChange: (event: SelectChangeEvent) => void;
  children: React.ReactNode;
  currenyValue: string;
};

const SelectCurrency = ({ onChange, currenyValue, children }: Props) => {
  return (
    <FormControl fullWidth>
      <InputLabel>Currency</InputLabel>
      <Select value={currenyValue} label="Currency" onChange={onChange}>
        {children}
      </Select>
    </FormControl>
  );
};

export default SelectCurrency;
