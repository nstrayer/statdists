// @ts-check

/**
 * Generates an array of length n filled with a constant value.
 * @param {number} n - number of elements in array
 * @param {any} [fill = 0] - constant to be put into each array index. 
 * @return {any[]} - array of length n with each element containing fill.
 */
const emptyArr = function(n, fill = 0) {
  return Array.from(new Array(n), () => fill);
};

module.exports = emptyArr;
