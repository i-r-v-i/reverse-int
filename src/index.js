module.exports = function reverse(n) {
  // if (n < 0) {
  //   n *= -1;
  // }
  const num = `${n}`;
  const str = num.split('').reverse().join('');
  return Number(str);
};
