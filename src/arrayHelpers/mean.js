// @ts-check

/**
 * Finds the max of an array of numbers
 * @param {number[]} vals - array of numbers
 * @return {number} - mean of array elements
 */
function mean(vals) {
  const N = vals.length;
  return vals.reduce((total, current) => total + current / N, 0);
}

module.exports = mean;
