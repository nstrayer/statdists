// @ts-check

/**
 * Takes two equal length vectors and adds them together element-wise.
 * @param {number[]} vec1 - vector of numbers
 * @param {number[]} vec2 - vector of numbers
 * @return {number[]} - Element wise added vectors
 */
function vadd(vec1, vec2) {
  return vec1.map((d, i) => d + vec2[i]);
}
module.exports = vadd;
