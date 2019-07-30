/**
 *
 * @param array
 * @param callbackfn
 * @param thisArg
 */
async function forEachAsync<T = any>(
  array: T[],
  callbackfn: (value: T, index: number, array: T[]) => Promise<void> | void,
  thisArg?: any
) {
  for (let key in array) {
    await callbackfn(array[key], Number(key), array);
  }
}

export default forEachAsync;
