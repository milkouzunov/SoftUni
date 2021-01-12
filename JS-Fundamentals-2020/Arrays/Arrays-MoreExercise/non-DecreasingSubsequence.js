function solve (array) {
    let newArray = [];
    let minNum = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i < array.length; i++) {
        let currentNum = array[i];
        if(currentNum >= minNum) {
            newArray.push(currentNum);
            minNum = currentNum;
        }
    } 
    console.log(newArray.join(' '))
}

solve([ 20, 3, 2, 15, 6, 1])