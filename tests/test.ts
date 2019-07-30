import test from "ava";

import { filterAsync, mapAsync } from "../src";

const arr = [1, 2, 3];
const gt2Func = async (i: number) => i > 2;
const doubleFunc = async (i: number) => i * 2;

test("filterAsync", async t => {
  const result = await filterAsync<number>(arr, gt2Func);
  t.deepEqual(result, [3]);
});

test("mapAsync", async t => {
  const result = await mapAsync<number, number>(arr, doubleFunc);
  t.deepEqual(result, [2, 4, 6]);
});
