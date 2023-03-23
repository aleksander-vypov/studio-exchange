import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IExchangeState } from '../../types/types';

const initState: IExchangeState = {
  currencyList: [
    {
      name: 'AED',
      fullName: 'United Arab Emirates Dirham',
    },
    {
      name: 'AFN',
      fullName: 'Afghan Afghani',
    },
    {
      name: 'ALL',
      fullName: 'Albanian Lek',
    },
    {
      name: 'AMD',
      fullName: 'Armenian Dram',
    },
    {
      name: 'ANG',
      fullName: 'Netherlands Antillean Guilder',
    },
    {
      name: 'AOA',
      fullName: 'Angolan Kwanza',
    },
    {
      name: 'ARS',
      fullName: 'Argentine Peso',
    },
    {
      name: 'AUD',
      fullName: 'Australian Dollar',
    },
    {
      name: 'AWG',
      fullName: 'Aruban Florin',
    },
    {
      name: 'AZN',
      fullName: 'Azerbaijani Manat',
    },
    {
      name: 'BAM',
      fullName: 'Bosnia-Herzegovina Convertible Mark',
    },
    {
      name: 'BBD',
      fullName: 'Barbadian Dollar',
    },
    {
      name: 'BDT',
      fullName: 'Bangladeshi Taka',
    },
    {
      name: 'BGN',
      fullName: 'Bulgarian Lev',
    },
    {
      name: 'BHD',
      fullName: 'Bahraini Dinar',
    },
    {
      name: 'BIF',
      fullName: 'Burundian Franc',
    },
    {
      name: 'BMD',
      fullName: 'Bermudan Dollar',
    },
    {
      name: 'BND',
      fullName: 'Brunei Dollar',
    },
    {
      name: 'BOB',
      fullName: 'Bolivian Boliviano',
    },
    {
      name: 'BRL',
      fullName: 'Brazilian Real',
    },
    {
      name: 'BSD',
      fullName: 'Bahamian Dollar',
    },
    {
      name: 'BTC',
      fullName: 'Bitcoin',
    },
    {
      name: 'BTN',
      fullName: 'Bhutanese Ngultrum',
    },
    {
      name: 'BWP',
      fullName: 'Botswanan Pula',
    },
    {
      name: 'BYN',
      fullName: 'New Belarusian Ruble',
    },
    {
      name: 'BYR',
      fullName: 'Belarusian Ruble',
    },
    {
      name: 'BZD',
      fullName: 'Belize Dollar',
    },
    {
      name: 'CAD',
      fullName: 'Canadian Dollar',
    },
    {
      name: 'CDF',
      fullName: 'Congolese Franc',
    },
    {
      name: 'CHF',
      fullName: 'Swiss Franc',
    },
    {
      name: 'CLF',
      fullName: 'Chilean Unit of Account (UF)',
    },
    {
      name: 'CLP',
      fullName: 'Chilean Peso',
    },
    {
      name: 'CNY',
      fullName: 'Chinese Yuan',
    },
    {
      name: 'COP',
      fullName: 'Colombian Peso',
    },
    {
      name: 'CRC',
      fullName: 'Costa Rican Colón',
    },
    {
      name: 'CUC',
      fullName: 'Cuban Convertible Peso',
    },
    {
      name: 'CUP',
      fullName: 'Cuban Peso',
    },
    {
      name: 'CVE',
      fullName: 'Cape Verdean Escudo',
    },
    {
      name: 'CZK',
      fullName: 'Czech Republic Koruna',
    },
    {
      name: 'DJF',
      fullName: 'Djiboutian Franc',
    },
    {
      name: 'DKK',
      fullName: 'Danish Krone',
    },
    {
      name: 'DOP',
      fullName: 'Dominican Peso',
    },
    {
      name: 'DZD',
      fullName: 'Algerian Dinar',
    },
    {
      name: 'EGP',
      fullName: 'Egyptian Pound',
    },
    {
      name: 'ERN',
      fullName: 'Eritrean Nakfa',
    },
    {
      name: 'ETB',
      fullName: 'Ethiopian Birr',
    },
    {
      name: 'EUR',
      fullName: 'Euro',
    },
    {
      name: 'FJD',
      fullName: 'Fijian Dollar',
    },
    {
      name: 'FKP',
      fullName: 'Falkland Islands Pound',
    },
    {
      name: 'GBP',
      fullName: 'British Pound Sterling',
    },
    {
      name: 'GEL',
      fullName: 'Georgian Lari',
    },
    {
      name: 'GGP',
      fullName: 'Guernsey Pound',
    },
    {
      name: 'GHS',
      fullName: 'Ghanaian Cedi',
    },
    {
      name: 'GIP',
      fullName: 'Gibraltar Pound',
    },
    {
      name: 'GMD',
      fullName: 'Gambian Dalasi',
    },
    {
      name: 'GNF',
      fullName: 'Guinean Franc',
    },
    {
      name: 'GTQ',
      fullName: 'Guatemalan Quetzal',
    },
    {
      name: 'GYD',
      fullName: 'Guyanaese Dollar',
    },
    {
      name: 'HKD',
      fullName: 'Hong Kong Dollar',
    },
    {
      name: 'HNL',
      fullName: 'Honduran Lempira',
    },
    {
      name: 'HRK',
      fullName: 'Croatian Kuna',
    },
    {
      name: 'HTG',
      fullName: 'Haitian Gourde',
    },
    {
      name: 'HUF',
      fullName: 'Hungarian Forint',
    },
    {
      name: 'IDR',
      fullName: 'Indonesian Rupiah',
    },
    {
      name: 'ILS',
      fullName: 'Israeli New Sheqel',
    },
    {
      name: 'IMP',
      fullName: 'Manx pound',
    },
    {
      name: 'INR',
      fullName: 'Indian Rupee',
    },
    {
      name: 'IQD',
      fullName: 'Iraqi Dinar',
    },
    {
      name: 'IRR',
      fullName: 'Iranian Rial',
    },
    {
      name: 'ISK',
      fullName: 'Icelandic Króna',
    },
    {
      name: 'JEP',
      fullName: 'Jersey Pound',
    },
    {
      name: 'JMD',
      fullName: 'Jamaican Dollar',
    },
    {
      name: 'JOD',
      fullName: 'Jordanian Dinar',
    },
    {
      name: 'JPY',
      fullName: 'Japanese Yen',
    },
    {
      name: 'KES',
      fullName: 'Kenyan Shilling',
    },
    {
      name: 'KGS',
      fullName: 'Kyrgystani Som',
    },
    {
      name: 'KHR',
      fullName: 'Cambodian Riel',
    },
    {
      name: 'KMF',
      fullName: 'Comorian Franc',
    },
    {
      name: 'KPW',
      fullName: 'North Korean Won',
    },
    {
      name: 'KRW',
      fullName: 'South Korean Won',
    },
    {
      name: 'KWD',
      fullName: 'Kuwaiti Dinar',
    },
    {
      name: 'KYD',
      fullName: 'Cayman Islands Dollar',
    },
    {
      name: 'KZT',
      fullName: 'Kazakhstani Tenge',
    },
    {
      name: 'LAK',
      fullName: 'Laotian Kip',
    },
    {
      name: 'LBP',
      fullName: 'Lebanese Pound',
    },
    {
      name: 'LKR',
      fullName: 'Sri Lankan Rupee',
    },
    {
      name: 'LRD',
      fullName: 'Liberian Dollar',
    },
    {
      name: 'LSL',
      fullName: 'Lesotho Loti',
    },
    {
      name: 'LTL',
      fullName: 'Lithuanian Litas',
    },
    {
      name: 'LVL',
      fullName: 'Latvian Lats',
    },
    {
      name: 'LYD',
      fullName: 'Libyan Dinar',
    },
    {
      name: 'MAD',
      fullName: 'Moroccan Dirham',
    },
    {
      name: 'MDL',
      fullName: 'Moldovan Leu',
    },
    {
      name: 'MGA',
      fullName: 'Malagasy Ariary',
    },
    {
      name: 'MKD',
      fullName: 'Macedonian Denar',
    },
    {
      name: 'MMK',
      fullName: 'Myanma Kyat',
    },
    {
      name: 'MNT',
      fullName: 'Mongolian Tugrik',
    },
    {
      name: 'MOP',
      fullName: 'Macanese Pataca',
    },
    {
      name: 'MRO',
      fullName: 'Mauritanian Ouguiya',
    },
    {
      name: 'MUR',
      fullName: 'Mauritian Rupee',
    },
    {
      name: 'MVR',
      fullName: 'Maldivian Rufiyaa',
    },
    {
      name: 'MWK',
      fullName: 'Malawian Kwacha',
    },
    {
      name: 'MXN',
      fullName: 'Mexican Peso',
    },
    {
      name: 'MYR',
      fullName: 'Malaysian Ringgit',
    },
    {
      name: 'MZN',
      fullName: 'Mozambican Metical',
    },
    {
      name: 'NAD',
      fullName: 'Namibian Dollar',
    },
    {
      name: 'NGN',
      fullName: 'Nigerian Naira',
    },
    {
      name: 'NIO',
      fullName: 'Nicaraguan Córdoba',
    },
    {
      name: 'NOK',
      fullName: 'Norwegian Krone',
    },
    {
      name: 'NPR',
      fullName: 'Nepalese Rupee',
    },
    {
      name: 'NZD',
      fullName: 'New Zealand Dollar',
    },
    {
      name: 'OMR',
      fullName: 'Omani Rial',
    },
    {
      name: 'PAB',
      fullName: 'Panamanian Balboa',
    },
    {
      name: 'PEN',
      fullName: 'Peruvian Nuevo Sol',
    },
    {
      name: 'PGK',
      fullName: 'Papua New Guinean Kina',
    },
    {
      name: 'PHP',
      fullName: 'Philippine Peso',
    },
    {
      name: 'PKR',
      fullName: 'Pakistani Rupee',
    },
    {
      name: 'PLN',
      fullName: 'Polish Zloty',
    },
    {
      name: 'PYG',
      fullName: 'Paraguayan Guarani',
    },
    {
      name: 'QAR',
      fullName: 'Qatari Rial',
    },
    {
      name: 'RON',
      fullName: 'Romanian Leu',
    },
    {
      name: 'RSD',
      fullName: 'Serbian Dinar',
    },
    {
      name: 'RUB',
      fullName: 'Russian Ruble',
    },
    {
      name: 'RWF',
      fullName: 'Rwandan Franc',
    },
    {
      name: 'SAR',
      fullName: 'Saudi Riyal',
    },
    {
      name: 'SBD',
      fullName: 'Solomon Islands Dollar',
    },
    {
      name: 'SCR',
      fullName: 'Seychellois Rupee',
    },
    {
      name: 'SDG',
      fullName: 'Sudanese Pound',
    },
    {
      name: 'SEK',
      fullName: 'Swedish Krona',
    },
    {
      name: 'SGD',
      fullName: 'Singapore Dollar',
    },
    {
      name: 'SHP',
      fullName: 'Saint Helena Pound',
    },
    {
      name: 'SLE',
      fullName: 'Sierra Leonean Leone',
    },
    {
      name: 'SLL',
      fullName: 'Sierra Leonean Leone',
    },
    {
      name: 'SOS',
      fullName: 'Somali Shilling',
    },
    {
      name: 'SRD',
      fullName: 'Surinamese Dollar',
    },
    {
      name: 'STD',
      fullName: 'São Tomé and Príncipe Dobra',
    },
    {
      name: 'SVC',
      fullName: 'Salvadoran Colón',
    },
    {
      name: 'SYP',
      fullName: 'Syrian Pound',
    },
    {
      name: 'SZL',
      fullName: 'Swazi Lilangeni',
    },
    {
      name: 'THB',
      fullName: 'Thai Baht',
    },
    {
      name: 'TJS',
      fullName: 'Tajikistani Somoni',
    },
    {
      name: 'TMT',
      fullName: 'Turkmenistani Manat',
    },
    {
      name: 'TND',
      fullName: 'Tunisian Dinar',
    },
    {
      name: 'TOP',
      fullName: 'Tongan Paʻanga',
    },
    {
      name: 'TRY',
      fullName: 'Turkish Lira',
    },
    {
      name: 'TTD',
      fullName: 'Trinidad and Tobago Dollar',
    },
    {
      name: 'TWD',
      fullName: 'New Taiwan Dollar',
    },
    {
      name: 'TZS',
      fullName: 'Tanzanian Shilling',
    },
    {
      name: 'UAH',
      fullName: 'Ukrainian Hryvnia',
    },
    {
      name: 'UGX',
      fullName: 'Ugandan Shilling',
    },
    {
      name: 'USD',
      fullName: 'United States Dollar',
    },
    {
      name: 'UYU',
      fullName: 'Uruguayan Peso',
    },
    {
      name: 'UZS',
      fullName: 'Uzbekistan Som',
    },
    {
      name: 'VEF',
      fullName: 'Venezuelan Bolívar Fuerte',
    },
    {
      name: 'VES',
      fullName: 'Sovereign Bolivar',
    },
    {
      name: 'VND',
      fullName: 'Vietnamese Dong',
    },
    {
      name: 'VUV',
      fullName: 'Vanuatu Vatu',
    },
    {
      name: 'WST',
      fullName: 'Samoan Tala',
    },
    {
      name: 'XAF',
      fullName: 'CFA Franc BEAC',
    },
    {
      name: 'XAG',
      fullName: 'Silver (troy ounce)',
    },
    {
      name: 'XAU',
      fullName: 'Gold (troy ounce)',
    },
    {
      name: 'XCD',
      fullName: 'East Caribbean Dollar',
    },
    {
      name: 'XDR',
      fullName: 'Special Drawing Rights',
    },
    {
      name: 'XOF',
      fullName: 'CFA Franc BCEAO',
    },
    {
      name: 'XPF',
      fullName: 'CFP Franc',
    },
    {
      name: 'YER',
      fullName: 'Yemeni Rial',
    },
    {
      name: 'ZAR',
      fullName: 'South African Rand',
    },
    {
      name: 'ZMK',
      fullName: 'Zambian Kwacha (pre-2013)',
    },
    {
      name: 'ZMW',
      fullName: 'Zambian Kwacha',
    },
    {
      name: 'ZWL',
      fullName: 'Zimbabwean Dollar',
    },
  ],
  isLoading: false,
  error: '',
  currentConvert: {
    amount: '',
    from: '',
    to: '',
    result: '',
  },
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

    convertFetching(state) {
      state.isLoading = true;
    },
    convertFetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = '';
      state.currentConvert = action.payload;
    },
    convertFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default currencySlice.reducer;
