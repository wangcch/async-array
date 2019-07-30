/**
 *
 * @param array
 * @param callbackfn
 * @param thisArg
 */
declare function filterAsync<T = any>(array: T[], callbackfn: (value: T, index: number, array: T[]) => unknown, thisArg?: any): Promise<T[]>;
export default filterAsync;
