function solve(array, numRotations) {
    numRotations = Number(numRotations) % 1000;
    
    for (let i = 0; i < numRotations; i++) {
        let lastEl = array.pop();
        array.unshift(lastEl)
        
    }
    console.log(array.join(' '));
}