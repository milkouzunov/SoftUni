function extractIncreasingSubsequenceFromArray(input) {
    let currentMaxNum = input.shift();
    let result = [];
    result.push(currentMaxNum);
    
    for (let num of input) {
        if(currentMaxNum <= num) {
            currentMaxNum = num;
            result.push(currentMaxNum);
        }
    }
    return result;
}

extractIncreasingSubsequenceFromArray
([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]);