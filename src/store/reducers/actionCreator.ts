import { AppDispatch } from '../store';
import useCurrencyResource from '../../hooks/useCurrencyResource';
import { currencySlice } from './currencySlice';
import { formatCurrencyList } from '../../utils/formatCurrencyList';
//d1dNtL3TtyGt78VnwoEw3anb4XITkE0R

export const fetchCurrency = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(currencySlice.actions.currencyFetching());
    const response = await useCurrencyResource();

    dispatch(
      currencySlice.actions.currencyFetchingSuccess(
        formatCurrencyList(response.symbols)
      )
    );
  } catch (e: any) {
    dispatch(currencySlice.actions.currencyFetchingError(e?.message));
  }
};
