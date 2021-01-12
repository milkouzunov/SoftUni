function solve(nums) {
    let sumOldArray = 0;
    let sumNewArray = 0;
    for(let i = 0; i < nums.length; i++) {
        sumOldArray += nums[i];
        if(nums[i] % 2 === 0) {
           nums[i] += i;
        } else {
           nums[i] -= i;
        }
        sumNewArray += nums[i];
    }
    console.log(nums);
    console.log(sumOldArray);
    console.log(sumNewArray);

}

solve([5, 15, 23, 56, 35])