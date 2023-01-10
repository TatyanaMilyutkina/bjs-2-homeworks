function getArrayParams(...arr) {
  let min;
  let max;
  let sum = 0;
  let avg;
  for (let i = 0; i < arr.length; i++) {
    sum += arr;

  }
  avg = sum / i;
  return { avg: avg };
  //return { min: min, max: max, avg: avg }; вольный стиль 8 937 064 76 44 Журавлева Анна (450*(3)*12) пн 15 часов  среда 17.15 пятница 17.15 
}
getArrayParams(-99, 99, 10) // { min: -99, max: 99, avg: 3.33 }
//getArrayParams(1, 2, 3, -100, 10)  // { min: -100, max: 10, avg: -16.80 }
//getArrayParams(5)  // { min: 5, max: 5, avg: 5 }

//function summElementsWorker(...arr) {}

//function differenceMaxMinWorker(...arr) {}

//function differenceEvenOddWorker(...arr) {}

//function averageEvenElementsWorker(...arr) {}

//function makeWork(arrOfArr, func) {}
