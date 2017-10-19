// @ts-check

/**
 * Takes a vector and a scaler and returns a scaled vector.
 * @param {number[]} vec - vector of numbers
 * @param {number} scaler - single scaler
 * @return {number[]} - Scaled vector
 */
function scale(vec, scaler) {
  return vec.map((d) => d * scaler);
}

module.exports = scale;
