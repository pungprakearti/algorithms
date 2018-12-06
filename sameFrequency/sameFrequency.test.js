const sameFrequency = require('./sameFrequency');

describe('test sameFrequency', () => {
  it('should return true if same frequency of digits', () => {
    expect(sameFrequency(182, 281)).toBe(true),
      expect(sameFrequency(434221, 212443)).toBe(true),
      expect(sameFrequency(9093209, 9990203)).toBe(true);
  });

  it('should return false if different lengths', () => {
    expect(sameFrequency(4231, 89800985)).toBe(false);
  });

  it('should return false if different frequency of digits', () => {
    expect(sameFrequency(4231, 8985)).toBe(false);
  });

  // it('should return false if different frequency of digits', () => {
  //   expect(sameFrequency(4231, 1240)).toBe(false);
  // });
});
