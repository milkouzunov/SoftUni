function solve(array) {
    let nums = [];
    for (let i = 0; i < array.length; i++) {
        if(array[i] === 'add') {
            nums.push(i+1);
        } else {
            nums.pop();
        }
        
    }
    if(nums.length > 0) {
        console.log(nums.join(' '));
    } else {
        console.log("Empty")
    }
}
solve(['remove', 'remove', 'remove'])