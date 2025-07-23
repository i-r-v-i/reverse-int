module.exports = function reverse(n) {
  if (n < 0) {
    const num = `${n}`;
    return Number(-1 * num.split('').reverse().join(''));
  }
  const num = `${n}`;
  return Number(num.split('').reverse().join(''));
};
