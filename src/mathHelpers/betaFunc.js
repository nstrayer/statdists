// @ts-check

import gammaFunc from './gammaFunc';

/**
 * Calculates the beta function between alpha and beta
 * @param {number} alpha - alpha value for beta
 * @param {number} beta - beta 
 * @return {number} - Result of beta(x)
 */
function betaFunc(alpha, beta) {
  return gammaFunc(alpha) * gammaFunc(beta) / gammaFunc(alpha + beta);
}

module.exports = betaFunc;
