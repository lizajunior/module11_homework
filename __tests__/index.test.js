const { getPercents } = require('../index.js');
describe('get percents from number', () => {
  it('should calculate 10% of 100 correctly', () => {
    let percent = 10;
    let number = 100;
    let result = getPercents(percent, number);
    expect((result)).toBe(10);
  });
  it('should calculate 30% of 70 correctly', () => {
    let percent = 30;
    let number = 70;
    let result = getPercents(percent, number);
    expect(result).toBe(21);
  });
  it('should calculate 15% of 80 correctly', () => {
    let percent = 15;
    let number = 80;
    let result = getPercents(percent, number);
    expect(result).toBe(12);
  });
});
