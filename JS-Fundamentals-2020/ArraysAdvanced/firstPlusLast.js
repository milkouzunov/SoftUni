function firstPlusLast (inputArr) {
    return Number(inputArr.shift()) + Number(inputArr.pop())
}

console.log(firstPlusLast(['20', '30', '40']))