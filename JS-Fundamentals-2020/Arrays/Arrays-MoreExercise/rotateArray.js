function solve(array) {
    let numRotations = Number(array.pop());
    let newArray = [];
    
    for (let i = 0; i < numRotations; i++) {
        let lastEl = array.pop();
        newArray = [lastEl].concat(array);
        array = newArray;
    }
    if(newArray.length <= 0) {
        console.log('Empty');
    } else {
        console.log(newArray.join(' '));
    }
}

solve(['Banana', 'Orange', 'Coconut', 'Apple', '15'])