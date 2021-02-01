function sortArray(array, criterion) {
    let sortedArray = [];
    if(criterion === 'asc') {
        sortedArray = array.sort((a,b) => a-b);
    } else {
        sortedArray = array.sort((a,b) => b-a);
    }
    return sortedArray;
}

console.log(sortArray([14, 7, 17, 6, 8], 'desc'));