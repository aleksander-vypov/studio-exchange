interface IRequest {
  method: 'GET';
  redirect: 'follow';
  headers: Headers;
}

import { ICurrentConvert } from '../types/types';

interface ICurrencyFromApi {
  symbols: Record<string, string>;
}

function useCurrencyResource() {
  const myHeaders = new Headers();
  myHeaders.append('apikey', 'd1dNtL3TtyGt78VnwoEw3anb4XITkE0R');

  const requestOptions: IRequest = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders,
  };

  const getCurrency = async (): Promise<ICurrencyFromApi> => {
    return fetch(
      'https://api.apilayer.com/exchangerates_data/symbols',
      requestOptions
    )
      .then((response) => response.json())
      .catch((error) => console.log('error', error));
  };

  const getConvert = async (
    to: string,
    from: string,
    amount: string
  ): Promise<ICurrentConvert | void> => {
    return fetch(
      `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        return { ...data.query, result: data.result };
      })
      .catch((error) => console.log('error', error));
  };

  return {
    getCurrency,
    getConvert,
  };
}

export default useCurrencyResource;
