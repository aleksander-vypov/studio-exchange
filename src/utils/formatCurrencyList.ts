import { ICurrency } from '../types/types';

export function formatCurrencyList(list: Record<string, string>): ICurrency[] {
  const result = [];
  for (let val in list) {
    result.push({ name: val, fullName: list[val] });
  }
  return result;
}
