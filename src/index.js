module.exports = function reverse (n) {
   n = Math.abs(n)
   let num = String(n);
   let arr = Array.from(num);
   let revertNum = Number(arr.reverse().join(''));
   return revertNum;
}
