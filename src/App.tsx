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
import Loader from './components/Loader';

export default function App() {
  const {
    currencyList,
    isLoading,
    currentConvert: { amount, result },
    exchangeHistory,
  } = useAppSelector((state) => state.currencyReducer);

  const dispatch = useAppDispatch();

  const [firstCurrency, setFirstCurrency] = useState<string>('');
  const [secondCurrency, setSecondCurrency] = useState<string>('');
  const [firstValue, setFirstValue] = useState<string>('');
  const [secondValue, setSecondValue] = useState<string>('');
  const [convertParams, setParams] = useState<IFromTo>({});

  const inputResult = () => {
    if (String(amount) === firstValue) {
      setSecondValue(result);
    } else {
      setFirstValue(result);
    }
  };

  const firstCurrencyHandle = useCallback(
    (event: SelectChangeEvent) => {
      setFirstCurrency(event.target.value);
      setParams((params) => ({
        ...params,
        from: event.target.value,
        to: secondCurrency,
      }));
    },
    [secondCurrency, firstCurrency]
  );

  const firstCurrencyChange = useCallback(
    (value: string) => {
      const params = {
        from: value ? firstCurrency : secondCurrency,
        to: value ? secondCurrency : firstCurrency,
        amount: value ? value : secondValue,
      };
      setParams(params);
      setFirstValue(value);
    },
    [secondCurrency, firstCurrency, secondValue]
  );

  const secondCurrencyHandle = useCallback(
    (event: SelectChangeEvent) => {
      setSecondCurrency(event.target.value);
      setParams((params) => ({
        ...params,
        from: event.target.value,
        to: firstCurrency,
      }));
    },
    [secondCurrency, firstCurrency]
  );

  const secondCurrencyChange = useCallback(
    (value: string) => {
      const params = {
        from: value ? secondCurrency : firstCurrency,
        to: value ? firstCurrency : secondCurrency,
        amount: value ? value : firstValue,
      };
      setParams(params);
      setSecondValue(value);
    },
    [secondCurrency, firstCurrency, firstValue]
  );

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

  useEffect(() => {
    dispatch(fetchCurrency());
  }, []);

  console.log(convertParams);

  return (
    <>
      {isLoading ? (
        <Loader />
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
                    {`\u2009`}
                    {el.fullName}
                  </MenuItem>
                ))}
              </SelectCurrency>

              <Input
                disabled={!firstCurrency}
                onChange={firstCurrencyChange}
                value={firstValue}
              />
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
                    {`\u2009`}
                    {el.fullName}
                  </MenuItem>
                ))}
              </SelectCurrency>

              <Input
                disabled={!secondCurrency}
                onChange={secondCurrencyChange}
                value={secondValue}
              />
            </div>
          </div>
          <div className={styles.btn}>
            <Button
              disabled={
                !Boolean(
                  (firstValue || secondValue) &&
                    convertParams.from &&
                    convertParams.to
                )
              }
              variant="outlined"
              onClick={exchange}
            >
              {convertParams.from && convertParams.to
                ? `EXCHANGE FROM ${convertParams.from} TO ${convertParams.to}`
                : 'EXCHANGE'}
            </Button>
          </div>
          {!!exchangeHistory.length && (
            <div className={styles.history}>
              <ul>
                {exchangeHistory.map((el, i) => (
                  <li
                    key={i}
                  >{`${el.amount} from ${el.from} to ${el.to}: ${el.result}`}</li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </>
  );
}
