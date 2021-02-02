function subSum(arr, startI, endI) {
    if(Array.isArray(arr) == false) {
        return NaN;
    }
    if (startI < 0) {
        startI = 0;
    }
    if(endI > arr.length - 1) {
        endI = arr.length - 1;
    }
    return sum = arr.slice(startI, endI + 1).reduce((a, c) => a + Number(c),0);
}


console.log(subSum('str', 3, 300))