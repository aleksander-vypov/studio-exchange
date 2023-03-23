import React, { useEffect, useState, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchCurrency, fetchConvert } from './store/reducers/actionCreator';
import MenuItem from '@mui/material/MenuItem';
import { SelectChangeEvent } from '@mui/material/Select';
import SelectCurrency from './components/SelectCurrency';
import Input from './components/Input';
import styles from './App.module.scss';
import { IFromTo } from './types/types';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import IconButton from '@mui/material/IconButton';
import { Button } from '@mui/material';

export default function App() {
  const {
    currencyList,
    isLoading,
    currentConvert: { amount, from, to, result },
  } = useAppSelector((state) => state.currencyReducer);

  const dispatch = useAppDispatch();

  const [firstCurrency, setFirstCurrency] = useState<string>('');
  const [secondCurrency, setSecondCurrency] = useState<string>('');
  const [firstValue, setFirstValue] = useState<string>('');
  const [secondValue, setSecondValue] = useState<string>('');
  const [convertParams, setParams] = useState<IFromTo | undefined>();

  const firstCurrencyHandle = useCallback((event: SelectChangeEvent) => {
    setFirstCurrency(event.target.value);
  }, []);

  const inputResult = () => {
    if (amount === firstValue) {
      setSecondValue(result);
    } else {
      setFirstValue(result);
    }
  };

  const firstCurrencyChange = useCallback((value: string) => {
    setParams({
      from: firstCurrency,
      to: secondCurrency,
      amount: value,
    });
    setFirstValue(value);
  }, []);

  const secondCurrencyHandle = useCallback((event: SelectChangeEvent) => {
    setSecondCurrency(event.target.value);
  }, []);

  const secondCurrencyChange = useCallback((value: string) => {
    setParams({
      from: secondCurrency,
      to: firstCurrency,
      amount: value,
    });
    setSecondValue(value);
  }, []);

  const exchange = () => {
    if (convertParams) {
      dispatch(fetchConvert(convertParams));
    }
  };

  useEffect(() => {
    if (result) {
      inputResult();
    }
  }, [result]);

  // useEffect(() => {
  //   dispatch(fetchCurrency());
  // }, []);

  return (
    <>
      {isLoading ? (
        <p>тут будет лоадер...</p>
      ) : (
        <>
          <div className={styles.container}>
            <div className={styles.inputs}>
              <SelectCurrency
                onChange={firstCurrencyHandle}
                currenyValue={firstCurrency}
              >
                {currencyList?.map((el) => (
                  <MenuItem key={el.name} value={el.name}>
                    <strong>{`${el.name} `}</strong>
                    <span />
                    {el.fullName}
                  </MenuItem>
                ))}
              </SelectCurrency>

              <Input onChange={firstCurrencyChange} value={firstValue} />
            </div>

            <IconButton className={styles.iconButton}>
              <ImportExportIcon />
            </IconButton>

            <div className={styles.inputs}>
              <SelectCurrency
                onChange={secondCurrencyHandle}
                currenyValue={secondCurrency}
              >
                {currencyList?.map((el) => (
                  <MenuItem key={el.name} value={el.name}>
                    <strong>{`${el.name} `}</strong>
                    <span />
                    {el.fullName}
                  </MenuItem>
                ))}
              </SelectCurrency>

              <Input onChange={secondCurrencyChange} value={secondValue} />
            </div>
          </div>
          <div className={styles.btn}>
            <Button variant="outlined" onClick={exchange}>
              EXCHANGE
            </Button>
          </div>
        </>
      )}
    </>
  );
}
