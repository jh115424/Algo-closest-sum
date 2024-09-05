// sort
//loop
// 2 pointers to find closest sum

export function closest(nums: number[], target: number): number {
  nums.sort((a, b) => a - b);
  let ans = nums[0] + nums[1] + nums[2];

  for (let i = 0; i < nums.length - 2; i++) {
    let start = i + 1;
    let end = nums.length - 1;
    nums.length - 1;
    while (start < end) {
      const sum = nums[i] + nums[start] + nums[end];
      if (sum > target) {
        end -= 1;
      } else {
        start += 1;
      }
      if (Math.abs(target - sum) < Math.abs(target - ans)) {
        ans = sum;
      }
    }
  }
  return ans;
}
module.exports = { closest };
