import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IExchangeState, ICurrentConvert, ICurrency } from '../../types/types';

const initState: IExchangeState = {
  currencyList: [],
  isLoading: false,
  error: '',
  currentConvert: {
    amount: '',
    from: '',
    to: '',
    result: '',
  },
  exchangeHistory: [],
};

export const currencySlice = createSlice({
  name: 'currency',
  initialState: initState,
  reducers: {
    fetching(state) {
      state.isLoading = true;
    },

    fetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },

    currencyFetchingSuccess(state, action: PayloadAction<ICurrency[]>) {
      state.isLoading = false;
      state.error = '';
      state.currencyList = action.payload;
    },

    convertFetchingSuccess(state, action: PayloadAction<ICurrentConvert>) {
      state.isLoading = false;
      state.error = '';
      state.currentConvert = action.payload;

      state.exchangeHistory = [...state.exchangeHistory, action.payload];
    },
  },
});

export default currencySlice.reducer;
