function solve (input) {
    let regex = /\+359([ -])2\1\d{3}\1\d{4}\b/g;
    let validNumbers = [];
    let number;
    while ((number = regex.exec(input)) !== null) {
        validNumbers.push(number[0]);
    }

    console.log(validNumbers.join(', '));
}