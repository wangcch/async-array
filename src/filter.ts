/**
 *
 * @param array
 * @param callbackfn
 * @param thisArg
 */
async function filterAsync<T = any>(
  array: T[],
  callbackfn: (value: T, index: number, array: T[]) => unknown,
  thisArg?: any
) {
  let filterResult = await Promise.all(array.map(callbackfn));

  return array.filter((_, index) => filterResult[index], thisArg);
}

export default filterAsync;
