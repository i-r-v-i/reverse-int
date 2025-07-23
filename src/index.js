module.exports = function reverse(n) {
  const num = Math.abs(n);
  const str = num.split('').reverse().join('');
  return Number(str);
};
