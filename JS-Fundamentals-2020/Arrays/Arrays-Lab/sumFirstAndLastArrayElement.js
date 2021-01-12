function solve(input) {
    let firstElement = Number(input.shift());
    let lastElement = Number(input.pop());
    let result = firstElement + lastElement;
    console.log(result)
}

solve(['20', '30', '40'])