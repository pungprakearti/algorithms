const narcissisticNumber = require('./narcissisticNumber');

describe('narcissisticNumber', function() {
  it('each individual digit to the power of the length is equal to the input', function() {
    expect(narcissisticNumber(153)).toBe(true);
    expect(narcissisticNumber(1634)).toBe(true);
    expect(narcissisticNumber(1531566)).toBe(false);
    expect(narcissisticNumber(4352345)).toBe(false);
  });
});
