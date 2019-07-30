import test from "ava";

import {
  filterAsync,
  mapAsync,
  forEachAsync,
  someAsync,
  everyAsync,
} from "../src";

interface IArrObjItem {
  value: number;
  index: number;
}

const arr01 = [1, 2, 3];
const arr02 = [5, 6, 7];
const gt2Func = async (i: number) => i > 2;
const doubleFunc = async (i: number) => i * 2;

test("filterAsync", async t => {
  const result = await filterAsync<number>(arr01, gt2Func);
  t.deepEqual(result, [3]);
});

test("mapAsync", async t => {
  const result = await mapAsync<number, number>(arr01, doubleFunc);
  t.deepEqual(result, [2, 4, 6]);
});

test("forEachAsync", async t => {
  let arrObj01: IArrObjItem[] = [];
  let arrObj02: IArrObjItem[] = [
    { value: 1, index: 0 },
    { value: 2, index: 1 },
    { value: 3, index: 2 },
  ];
  await forEachAsync<number>(arr01, async (item, index, array) => {
    t.is(item, arrObj02[index].value);
    t.deepEqual(arr01, array);
    arrObj01.push({ value: item, index: index });
  });

  t.deepEqual(arrObj01, arrObj02);
});

test("someAsync", async t => {
  const result = await someAsync<number>(arr01, gt2Func);
  t.is(result, true);
});

test("everyAsync", async t => {
  const result01 = await everyAsync<number>(arr01, gt2Func);
  const result02 = await everyAsync<number>(arr02, gt2Func);
  t.is(result01, false);
  t.is(result02, true);
});
