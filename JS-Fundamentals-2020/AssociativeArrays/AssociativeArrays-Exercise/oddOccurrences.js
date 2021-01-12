function oddOccurrences(input) {
    let odd = {};
    let elements = input.split(' ');
    for (let element of elements) {
        let counter = 0;
        for (let el of elements) {
            if (element.toLowerCase() === el.toLowerCase()) {
                counter++;
            }
        }
        if (counter % 2 !== 0) {
            element = element.toLowerCase()
            if (!odd.hasOwnProperty(element)) {
                odd[element] = counter;
            }
        }
    }
    let keys = Object.keys(odd);
    console.log(keys.join(' '));
}