function cookingByNumbers(number, prod1, prod2, prod3, prod4, prod5) {
    number = Number(number);
    let products = [prod1, prod2, prod3, prod4, prod5];
    for (let command of products) {
        if(command === 'chop'){
            number /= 2;
            console.log(number);
        } else if(command === 'dice') {
            number = Math.sqrt(number)
            console.log(number);
        } else if(command === 'spice') {
            number += 1;
            console.log(number);
        } else if(command === 'bake') {
            number *= 3;
            console.log(number);
        } else if (command === 'fillet') {
            number -= (number * 0.20);
            console.log(number);
        }
    }
}
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')