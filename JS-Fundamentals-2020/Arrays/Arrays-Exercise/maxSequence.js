function solve  (input) {
    let equalNum = [];
    for (let i = 0; i < input.length; i++) {
        let currentArr = [];
        for (let j = i; j < input.length; j++) {
            if(input[i] === input[j]) {
                currentArr.push(input[i]);
            } else if (input[i] !== input[j]) {
                break;
            }
            if(equalNum.length < currentArr.length) {
                equalNum = currentArr
            }
        }
    }
    console.log(equalNum.join(' '))
}