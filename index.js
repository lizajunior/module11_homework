function getPercents(percent, number) {
  percent = Number(percent);
  number = Number(number);
  
  if (isNaN(percent) || isNaN(number)) {//если хотя бы один из аргументов не является типом number
    throw new Error('Both arguments must be numbers or convertible to numbers');
  }
  
  const result = (percent / 100) * number;
  return result;
}
module.exports = { getPercents };