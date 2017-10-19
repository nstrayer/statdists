// @ts-check

/**
 * Calculates the factorial of a given integer.
 * @param {number} x - Numeric vector
 * @return {number} - x!
 */
const factorial = function(x) {
  return x == 0
    ? 1
    : Array.from(new Array(x - 1), (d, i) => i + 1).reduce(
        (prod, j) => prod * (x - j),
        x
      );
};

module.exports = factorial;
