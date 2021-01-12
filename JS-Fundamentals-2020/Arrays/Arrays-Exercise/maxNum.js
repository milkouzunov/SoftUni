function maxNumber(input) {
    let biggest = Number.MIN_SAFE_INTEGER;
    const arrOfBiggestNums = [];
    for (let i = input.length - 1; i >= 0; i--) {
      if (input[i] > biggest) {
        arrOfBiggestNums.push(input[i]);
        biggest = input[i];
      }
    }
    console.log(arrOfBiggestNums.reverse().join(" "));
}
maxNumber ([14, 24, 3, 19, 15, 17])