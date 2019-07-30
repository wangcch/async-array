import test from "ava";

import demo, { asyncFunc } from "../src";

test("demo", t => {
  t.is(demo, "demo");
});

test("async", async t => {
  const data = await asyncFunc();
  t.is(data, "async");
});
