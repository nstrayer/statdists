const {isArray} = Array;

// @ts-check

/**
 * Takes a vector or scaler and and returns logged values.
 * @param {number[] | number} vals - vector of numbers or single number
 * @return {number[]| number} - Input log transformed
 */
const log = function(vals) {
  return isArray(vals) ? vals.map((d) => Math.log(d)) : Math.log(vals);
};

module.exports = log;
