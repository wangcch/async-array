/**
 *
 * @param array
 * @param callbackfn
 * @param thisArg
 */
declare function mapAsync<U = any, T = any>(array: T[], callbackfn: (value: T, index: number, array: T[]) => Promise<U> | U, thisArg?: any): Promise<U[]>;
export default mapAsync;
