function negativeAndPositive (numbers) {
    let result = [];

    for (let num of numbers) {
        if(num < 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    }
    return result.join('\n');

}

console.log(negativeAndPositive([3, -2, 0, -1]))