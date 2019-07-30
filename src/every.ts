/**
 *
 * @param array
 * @param callbackfn
 * @param thisArg
 */
async function everyAsync<T = any>(
  array: T[],
  callbackfn: (
    value: T,
    index: number,
    array: T[]
  ) => Promise<boolean> | boolean,
  thisArg?: any
) {
  for (let key in array) {
    if (!(await callbackfn(array[key], Number(key), array))) {
      return false;
    }
  }

  return true;
}

export default everyAsync;
