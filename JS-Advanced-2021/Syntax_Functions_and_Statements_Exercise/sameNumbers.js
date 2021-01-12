function sameNumbers(number) {
    let digits = number.toString().split('').map(Number);
    let isSame = false;
    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
        sum += digits[i];
        if (digits.length === 1) {
            isSame = true;
            break;
        }
        if(digits[i] === digits[i+1]){
            isSame = true;
        } else if(digits[i+1] < digits.length){
            isSame = false;
        }
    }
    console.log(isSame);
    console.log(sum);
}

sameNumbers(4)