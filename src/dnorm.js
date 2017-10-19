import normPdf from './normPdf';

// @ts-check

/**
 * Calculates the pdf of a normal for either a vector or a scaler
 * @param {number[] | number} x - values desired for pdf calculation.
 * @param {number} [mu = 0] - Mean of the normal
 * @param {number} [sigma = 1] - Standard Deviation
 * @return {number[] | number} - array or scaler of pdf values
 */
function dnorm(x, mu = 0, sigma = 1) {
  return Array.isArray(x)
    ? x.map((d) => normPdf(d, mu, sigma))
    : normPdf(x, mu, sigma);
}

module.exports = dnorm;
