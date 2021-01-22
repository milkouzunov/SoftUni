function greatestCommonDivisor(firstNum, secondNum) {
    let bigNum = Math.max(firstNum,secondNum);
    let maxDivisor = 0;
    for (let i = 1; i < bigNum; i++) {
        if(firstNum % i === 0 && secondNum % i === 0) {
            maxDivisor = i;
        }
    }
    console.log(maxDivisor);
}

greatestCommonDivisor(2154, 458)