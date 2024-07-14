const { getPercents } = require('../index.js');
describe('get percents from number', () => {

  it('should calculate 10% of 100 correctly', () => {
    const percent = 10;
    const number = 100;
    const result = getPercents(percent, number);
    expect((result)).toBe(10);
  });

  it('should calculate 30% of 70 correctly', () => {
    const percent = 30;
    const number = 70;
    const result = getPercents(percent, number);
    expect(result).toBe(21);
  });

  //пограничные события
  it('should calculate 0% of 100 correctly', () => {
    const percent = 0;
    const number = 100;
    const result = getPercents(percent, number);
    expect(result).toBe(0);
  });

  it('should calculate 100% of 100 correctly', () => {
    const percent = 100;
    const number = 0;
    const result = getPercents(percent, number);
    expect(result).toBe(0);
  });

  it('should calculate 100% of 100 correctly', () => {
    const percent = 100;
    const number = 100;
    const result = getPercents(percent, number);
    expect(result).toBe(100);
  });

  it('should calculate 0% of 100 correctly when percent is typeof string', ()=>{
    const percent = "0";
    const number = 100;
    const result = getPercents(percent, number);
    expect(result).toBe(0);
  })

  it('should calculate 0% of 100 correctly when number is typeof string', ()=>{
    const percent = 0;
    const number = "100";
    const result = getPercents(percent, number);
    expect(result).toBe(0);
  })
  
  it('should calculate 20% of 200 correctly when both are typeof string', ()=>{
    const percent = "20";
    const number = "200";
    const result = getPercents(percent, number);
    expect(result).toBe(40);
  })

  it('should throw an error when number is not a number', () => {
    const percent = 50;
    const number = "abc";
    expect(() => getPercents(percent, number)).toThrow('Both arguments must be numbers or convertible to numbers');
  });

  it('should throw an error when percent is not a number', () => {
    const percent = "abc";
    const number = 50;
    expect(() => getPercents(percent, number)).toThrow('Both arguments must be numbers or convertible to numbers');
  });

});
