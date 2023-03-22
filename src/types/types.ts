export interface ICurrencyList {
  currency: []
}

export interface ICurrency {
  name: string;
  fullName: string;
}

export interface IExchangeState {
  currencyList: ICurrency[];
  isLoading: boolean;
  error: string;
}
