function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg;

  max = Math.max(...arr);
  min = Math.min(...arr);
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  };
  avg = sum / arr.length;
  avg = avg.toFixed(2);
  avg = +avg;
  return { min: min, max: max, avg: avg };
};

function summElementsWorker(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
};

function differenceMaxMinWorker(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let dif = 0;
  if (arr.length > 0) {

    max = Math.max(...arr);
    min = Math.min(...arr);
    dif = max - min;
  }

  return dif;
};

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let difSum = 0;

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] % 2 === 0) {
      sumEvenElement = sumEvenElement + arr[i];
    }

    else {
      sumOddElement = sumOddElement + arr[i];
    }

  }
  difSum = sumEvenElement - sumOddElement;
  return difSum;
};

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let resultEven = 0;

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] % 2 === 0) {
      sumEvenElement = sumEvenElement + arr[i];
      countEvenElement++;
    }
  }
  if (countEvenElement == 0) {
    0
  }
  else { resultEven = sumEvenElement / countEvenElement };

  return resultEven;
};

function makeWork(arrOfArr, func) {

  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    let array = arrOfArr;
    let spr = function () {
      return array;
    }();
    max = Math.max(...arrOfArr);
    const element = func(...arrOfArr[i]);
    if (element > maxWorkerResult) {
      maxWorkerResult = element
    }
  };

  return maxWorkerResult;
}
