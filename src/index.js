module.exports = function reverse(n) {
  const num = Math.abs(n);
  return Number(num.split('').reverse().join(''));
};
