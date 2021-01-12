function solve(input) {
    let lengthOne = input.length / 2;
    let first = input.split('').splice(0,lengthOne).reverse().join('');
    
    let second = input.split('').splice(lengthOne).reverse().join('');
    console.log(first);
    console.log(second);
}