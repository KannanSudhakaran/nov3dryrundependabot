const assert = require('assert');
const _ = require('lodash');
assert.deepStrictEqual(_.merge({ a: 1 }, { b: 2 }), { a: 1, b: 2 });
console.log('All tests passed');