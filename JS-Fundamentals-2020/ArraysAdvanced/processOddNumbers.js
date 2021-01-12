function processOddNumbers(numbers) {
    let oddIndex = numbers
    .filter((v,i) => i % 2 !== 0)
    .map(x => 2 * x)
    .reverse();

    return oddIndex.join(' ');
        
    
}

console.log(processOddNumbers([10, 15, 20, 25]))