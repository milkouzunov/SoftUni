function addAndRemoveElements(input) {
    let startNumber = 1;
    let elements = [];

    for (let i = 0; i < input.length; i++) {
        if(input[i] === 'add') {
            elements.push(startNumber + i)
        } else if(input[i] === 'remove') {
            elements.pop()
        }
    }
    if(elements.length > 0) {
        console.log(elements.join('\n'));
    } else {
        console.log('Empty');
    }
}
