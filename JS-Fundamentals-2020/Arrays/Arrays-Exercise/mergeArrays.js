function solve (firstArr, secondArr) {
    let thirdArr = [];

    for(let i = 0; i < firstArr.length; i++) {
        if(i % 2 === 0) {
            let numFirstArr = Number(firstArr[i]);
            let numSecondArr = Number(secondArr[i]);
            let sum = numFirstArr + numSecondArr;
            thirdArr.push(sum.toString());
        } else {
            let strFirstArr = firstArr[i];
            let strSecondArr = secondArr[i];
            let result = strFirstArr + strSecondArr;
            thirdArr.push(result);
        }
    }
    console.log(thirdArr.join(' - '));
    
}

solve (['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44']

)