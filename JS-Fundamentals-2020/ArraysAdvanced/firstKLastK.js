function firstKLastK(input) {
    let k = input.shift();

    let firstK = input.slice(0,k);
    let lastK = input.slice(-k);

    console.log(firstK.join(' '));
    console.log(lastK.join(' '));
}

firstKLastK([2, 
    7, 8, 9]
    )