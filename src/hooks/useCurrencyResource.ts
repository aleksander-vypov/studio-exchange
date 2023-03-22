interface IRequest {
  method: 'GET';
  redirect: 'follow';
  headers: Headers;
}

async function useCurrencyResource() {
  const myHeaders = new Headers();
  myHeaders.append('apikey', 'd1dNtL3TtyGt78VnwoEw3anb4XITkE0R');

  const requestOptions: IRequest = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders,
  };

  return fetch(
    'https://api.apilayer.com/exchangerates_data/symbols',
    requestOptions
  )
    .then((response) => response.json())
    .catch((error) => console.log('error', error));
}

export default useCurrencyResource;
