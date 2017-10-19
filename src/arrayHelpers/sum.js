// @ts-check

/**
 * Calculates the beta function for given alpha and beta
 * @param {number[]} vec - vector of numbers
 * @return {number} - sum of vector
 */
function sum(vec) {
  return vec.reduce((s, d) => s + d, 0);
}
module.exports = sum;
