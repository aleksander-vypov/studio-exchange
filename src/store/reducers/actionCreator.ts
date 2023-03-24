import { AppDispatch } from '../store';
import useCurrencyResource from '../../hooks/useCurrencyResource';
import { currencySlice } from './currencySlice';
import { formatCurrencyList } from '../../utils/formatCurrencyList';
import { IFromTo } from '../../types/types';

export const fetchCurrency = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(currencySlice.actions.fetching());

    const { getCurrency } = useCurrencyResource();

    const response = await getCurrency();

    dispatch(
      currencySlice.actions.currencyFetchingSuccess(
        formatCurrencyList(response.symbols)
      )
    );
  } catch (e: any) {
    dispatch(currencySlice.actions.fetchingError(e?.message));
  }
};

export const fetchConvert =
  ({ to, from, amount }: IFromTo) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(currencySlice.actions.fetching());

      const { getConvert } = useCurrencyResource();

      const response = await getConvert(to, from, amount);

      if (response) {
        dispatch(
          currencySlice.actions.convertFetchingSuccess({
            ...response,
          })
        );
      }
    } catch (e: any) {
      dispatch(currencySlice.actions.fetchingError(e?.message));
    }
  };
