import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchCurrency } from './store/reducers/actionCreator';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Grid } from '@mui/material';

export default function App() {
  const { currencyList } = useAppSelector((state) => state.currencyReducer);
  const dispatch = useAppDispatch();

  const [firstCurrency, setFirstCurrency] = useState('');
  const [secondCurrency, setSecondCurrency] = useState('');

  const firstCurrencyHandle = (event: SelectChangeEvent) => {
    setFirstCurrency(event.target.value as string);
  };

  const secondCurrencyHandle = (event: SelectChangeEvent) => {
    setSecondCurrency(event.target.value as string);
  };

  useEffect(() => {
    dispatch(fetchCurrency());
  }, []);
  return (
    <>
      <Grid container spacing={2}>
        <Grid xs={4}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Currency</InputLabel>
            <Select
              value={firstCurrency}
              label="Currency"
              onChange={firstCurrencyHandle}
            >
              {currencyList?.map((el) => (
                <MenuItem value={el.name}>
                  <p>{el.fullName}</p>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid xs={4}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Currency</InputLabel>
            <Select
              value={secondCurrency}
              label="Currency"
              onChange={secondCurrencyHandle}
            >
              {currencyList?.map((el) => (
                <MenuItem value={el.name}>
                  <p>{el.fullName}</p>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
}
