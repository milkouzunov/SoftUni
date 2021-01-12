function sorting(numbers) {
    let newArr = [];
    for (let num = 0; num <= numbers.length + 2; num++) {
        let maxNum = numbers.sort((a,b) => b - a)[0];
        newArr.push(maxNum);
        numbers.splice(0,1);
        let minNum = numbers.sort((a,b) => a - b)[0];
        newArr.push(minNum);
        numbers.splice(0,1);
        
    }
    console.log(newArr.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])