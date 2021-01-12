function smallestTwoNumbers(numbers) {

    numbers.sort((a,b) => a-b);
    let result = numbers.slice(0,2);
         
 
    return result.join(' ');
}

console.log(smallestTwoNumbers([30, 15, 50, 5]));