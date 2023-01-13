function compareArrays(arr1, arr2) {
    let result = arr1.length === arr2.length && arr1.every((n, i) => n === arr2[i]);
    return result;
}


function advancedFilter(arr) {
    let resultArr;
    let result = arr.filter(n => n > 0).filter(n => n % 3 === 0).map(n => n * 10)

    return result;
}