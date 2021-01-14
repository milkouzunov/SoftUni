function printEveryN_thElementFromAnArray(nums, step) {
    step = Number(step);
    let result = [];
    for (let i = 0; i < nums.length; i += step) {
        result.push(nums[i]);
    }
    return result;
}