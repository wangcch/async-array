/**
 *
 * @param array
 * @param callbackfn
 * @param thisArg
 */
declare function forEachAsync<T = any>(array: T[], callbackfn: (value: T, index: number, array: T[]) => Promise<void> | void, thisArg?: any): Promise<void>;
export default forEachAsync;
