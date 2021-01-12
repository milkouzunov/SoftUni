function solve(nums, magicSum) {

    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            let sum = nums[i] + nums[j];
            if(sum === magicSum) {
                console.log(`${nums[i]} ${nums[j]}`);
            }
        }
    }

}