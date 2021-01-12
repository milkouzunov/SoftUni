function searchNumber(numbers, parameters) {
    numbers.length = parameters[0];
    let searchNum = parameters[2];
    let deleteEl = parameters[1];
    numbers.splice(0,deleteEl);
    let counter = 0;
    for (let num of numbers) {
        if(num === searchNum) {
            counter++;
        }
    }
    console.log(`Number ${searchNum} occurs ${counter} times.`);
}

searchNumber([5, 2, 3, 4, 1, 6],
[5, 2, 3]);