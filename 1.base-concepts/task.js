"use strict"
function solveEquation(a, b, c) {
  let D = (b * b) - 4 * a * c;
  let arr = [];

  if (D == 0) {
    arr = [-b / (2 * a)]
  } else if (D > 0) {
    arr = [(-b + Math.sqrt(D)) / (2 * a), (-b - Math.sqrt(D)) / (2 * a)]
  }
  return arr;
}