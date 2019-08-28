# Async-Array

array asynchronous loop

[![Build Status](https://travis-ci.org/wangcch/async-array.svg?branch=master)](https://travis-ci.org/wangcch/async-array)
[![](https://img.shields.io/npm/v/@wangcch/async-array.svg)](https://www.npmjs.com/package/@wangcch/async-array)
[![](https://img.shields.io/npm/l/@wangcch/async-array.svg)](./LICENSE)

## usage

```
# install dependencies
yarn

# build for production with minification
yarn build

# test
yarn test
```

### example

```jsx
import {
  filterAsync,
  mapAsync,
  forEachAsync,
  someAsync,
  everyAsync,
} from "@wangcch/async-array";
```

```ts
// filterAsync
const result = await filterAsync([1, 2, 3], async i => i > 2);
// [3]
```

```ts
// mapAsync
const result = await mapAsync([1, 2, 3], async i => i * 2);
// [2, 4, 6]
```

```ts
// forEachAsync
let arr: number[] = [];
await forEachAsync([1, 2, 3], async i => {
  arr.push(i * 2);
});

return arr;
// [2, 4, 6]
```

```ts
// someAsync
const result = await someAsync([1, 2, 3], async i => i > 2);
// true
```

```ts
// everyAsync
const result = await everyAsync([1, 2, 3], async i => i > 2);
// false
```

## workflow

https://github.com/wangcch/ts-npm-workflow

## license

[MIT](./LICENSE)
