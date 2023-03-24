export interface ICurrency {
  name: string;
  fullName: string;
}

export interface ICurrentConvert {
  amount: string;
  from: string;
  to: string;
  result: string;
}

export interface IExchangeState {
  currencyList: ICurrency[];
  isLoading: boolean;
  error: string;
  currentConvert: ICurrentConvert;
  exchangeHistory: ICurrentConvert[];
}

export type IFromTo = Record<string, string>;
