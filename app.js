/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  let d = Math.sqrt(c)
  let res = false

  if (Number.isInteger(d)) {
    res = true
  } else {

    for (let b = 0; b <= Math.floor(d); b++) {
      let a = (Math.round(Math.sqrt(((d - b) * (d + b)))))
      if (a * a + b * b == c) {
        res = true
      }
    }
  }

  return res
};
