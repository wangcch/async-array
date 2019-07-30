/**
 *
 * @param array
 * @param callbackfn
 * @param thisArg
 */
async function mapAsync<U = any, T = any>(
  array: T[],
  callbackfn: (value: T, index: number, array: T[]) => Promise<U> | U,
  thisArg?: any
) {
  let result = await Promise.all(array.map(callbackfn, thisArg));

  return result;
}

export default mapAsync;
