function solve(arr1, arr2) {
    let sum = 0;
    for (let i in arr1) {
        const firstEl = arr1[i];
        const secondEl = arr2[i];
        if (firstEl !== secondEl) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return;
        }
        sum += +firstEl;
    }
 
    console.log(`Arrays are identical. Sum: ${sum}`);
}

solve(['10','20','30'], ['10','20','30'])