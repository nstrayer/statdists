// @ts-check


/**
 * Logical check for if a value is within (a, b). Inclusive so 2 not between 2 and 3.
 * @param {number} x - Number
 * @param {number} a - Lower bounds
 * @param {number} b - Upper bounds
 * @return {boolean} - If x is between a and b.
 */
function within(x, a, b) {
  return x > a && x < b;
}

module.exports = within;
