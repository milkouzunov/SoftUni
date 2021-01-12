function solve(firstArr, secondArr) {
    for (let element of firstArr) {
        let isCommon = secondArr.includes(element);
        if (isCommon) {
            console.log(element);
        }
    }
}

solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
)