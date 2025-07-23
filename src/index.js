module.exports = function reverse(n) {
  if (n < 0) {
    return Number(-1 * n.split('').reverse().join(''));
  }
  return Number(n.split('').reverse().join(''));
};
