import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IExchangeState } from '../../types/types';

const initState: IExchangeState = {
  currencyList: [],
  isLoading: false,
  error: '',
};

export const currencySlice = createSlice({
  name: 'currency',
  initialState: initState,
  reducers: {
    currencyFetching(state) {
      state.isLoading = true;
    },
    currencyFetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = '';
      state.currencyList = action.payload;
    },
    currencyFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default currencySlice.reducer;
