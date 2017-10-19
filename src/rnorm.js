import {randomNormal} from 'd3-random';

/**
 * Generates n random normal values
 * @param {number} [n = 1] - number of samples wanted
 * @param {number} [mu = 0] - mean of distribution
 * @param {number} [sigma = 1] - standard deviation of distribution
 * @return {number[]} - array of random uniforms
 */
function rnorm(n = 1, mu = 0, sigma = 1) {
  const gen = randomNormal(mu, sigma);
  return Array.from(new Array(n), () => gen());
}
module.exports = rnorm;
