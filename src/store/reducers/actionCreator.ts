import { AppDispatch } from '../store';
import useCurrencyResource from '../../hooks/useCurrencyResource';
import { currencySlice } from './currencySlice';
import { formatCurrencyList } from '../../utils/formatCurrencyList';
import { IFromTo } from '../../types/types';

export const fetchCurrency = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(currencySlice.actions.currencyFetching());

    const { getCurrency } = useCurrencyResource();

    const response = await getCurrency();

    dispatch(
      currencySlice.actions.currencyFetchingSuccess(
        formatCurrencyList(response.symbols)
      )
    );
  } catch (e: any) {
    dispatch(currencySlice.actions.currencyFetchingError(e?.message));
  }
};

export const fetchConvert =
  ({ to, from, amount }: IFromTo) =>
  async (dispatch: AppDispatch) => {
    try {
      
      dispatch(currencySlice.actions.convertFetching());

      const { getConvert } = useCurrencyResource();

      const response = await getConvert(to, from, amount);
      
      dispatch(
        currencySlice.actions.convertFetchingSuccess({
          ...response.query,
          result: response.result,
        })
      );
    } catch (e: any) {
      dispatch(currencySlice.actions.convertFetchingError(e?.message));
    }
  };
