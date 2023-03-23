export interface ICurrencyList {
  currency: [];
}

export interface ICurrency {
  name: string;
  fullName: string;
}

export interface IExchangeState {
  currencyList: ICurrency[];
  isLoading: boolean;
  error: string;
  currentConvert: {
    amount: string;
    from: string;
    to: string;
    result: string;
  };
}

export interface IFromTo {
  from: string;
  to: string;
  amount: string;
}
