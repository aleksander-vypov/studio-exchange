export function formatCurrencyList(list: Record<string, string>) {
  const result = [];
  for (let val in list) {
    result.push({ name: val, fullName: list[val] });
  }
  return result;
}
