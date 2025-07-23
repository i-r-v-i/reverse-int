module.exports = function reverse(n) {
  if (n < 0) {
    const res = n * -1;
    const num = `${res}`;
    const str = num.split('').reverse().join('');
    return Number(str);
  }
  const num = `${n}`;
  const arr = num.split('');
  if (arr[-1] === '0') {
    arr.shift();
  }
  return Number(arr.reverse().join(''));
};
