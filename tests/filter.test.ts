import test from "ava";

import { filterAsync } from "../src";

const arr = [1, 2, 3];
const gt2Func = async (i: number) => i > 2;

test("filterAsync", async t => {
  const result = await filterAsync(arr, gt2Func);
  t.deepEqual(result, [3]);
});
