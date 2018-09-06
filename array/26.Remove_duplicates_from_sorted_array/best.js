/*
6.09.18
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
let removeDuplicates = function(nums) {
    if (nums.length === 0) return 0; // if input length is 0 - no checks required
    let i = 0; // create cursor which will be store position of current unique number
    for (let j = 1; j < nums.length; j++) { // iteration over numbers starting from second element
        if (nums[j] !== nums[i]) { // if cursor element and current loop element are different
            i++; // move cursor further
            nums[i] = nums[j]; // place new unique number at cursor's position
        }
    }
    return i + 1; // return unique numbers count
};