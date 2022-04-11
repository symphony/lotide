const assert = require('chai').assert;
const tail = require("../tail");

describe("#head", () => {
  it("should return not mutate the original array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3);
  }),
  it("returns [4] for [1, 4]", () => {
    assert.deepEqual(tail([1, 4]), [4]);
  }),
  it("returns [3, 2, 4] for [1, 3, 2, 4]", () => {
    assert.deepEqual(tail([1, 3, 2, 4]), [3, 2, 4]);
  }),
  it("returns [] for [1]", () => {
    assert.deepEqual(tail([1]), []);
  });
});