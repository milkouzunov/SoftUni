function solve (num, array) {
let partialArr = [];
for(let i = 0; i < num; i++) {
    partialArr.push(array[i]);
    
}
  console.log(partialArr.reverse().join(' '));
}


solve(4, [-1, 20, 99, 5])