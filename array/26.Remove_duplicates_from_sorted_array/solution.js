/*
6.09.18
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
let removeDuplicates = function(nums) {
    for(let i = nums.length - 1; i >= 1; i--) // iterate every element of array backward
        if (nums[i] == nums[i - 1]) // if next element is same as current
            nums.splice(i, 1); // remove current element
    return nums.length;
};