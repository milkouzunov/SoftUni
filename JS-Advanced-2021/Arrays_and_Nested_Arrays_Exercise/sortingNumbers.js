function sortingNumbers(input) {
    let result = [];
    let minNum = Math.min(...input);
    result.push(minNum);
    input.splice(input.indexOf(minNum),1);
    let maxNum = Math.max(...input);
    result.push(maxNum);
    input.splice(input.indexOf(maxNum),1);
    while (input.length > 0) {
        if(minNum) {
            minNum = Math.min(...input);
            result.push(minNum);
            input.splice(input.indexOf(minNum),1);
        }
        if(maxNum) {
            maxNum = Math.max(...input);
            result.push(maxNum);
            input.splice(input.indexOf(maxNum),1);
        }
    }
    return result;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))