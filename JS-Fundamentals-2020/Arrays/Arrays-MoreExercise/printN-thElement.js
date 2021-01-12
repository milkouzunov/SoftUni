function solve (array) {
    let step = Number(array.pop());
    let newArr = [];
    for (let i = 0; i < array.length; i += step) {
        newArr.push(array[i]);
    }
    console.log(newArr.join(' '));

}

solve(['1', '2', '3', '4', '5', '6'])