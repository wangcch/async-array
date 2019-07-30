/**
 *
 * @param array
 * @param callbackfn
 * @param thisArg
 */
declare function someAsync<T = any>(array: T[], callbackfn: (value: T, index: number, array: T[]) => Promise<boolean> | boolean, thisArg?: any): Promise<boolean>;
export default someAsync;
