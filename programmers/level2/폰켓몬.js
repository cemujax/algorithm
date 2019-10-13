/**
 * 폰켓몬
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2019.10.09
 * @url     : https://programmers.co.kr/learn/courses/30/lessons/1845
 *
 */
function solution(nums) {
  const pickCnt = nums.length / 2;
  const set = new Set([...nums]);
  return pickCnt <= set.size ? pickCnt : set.size;
}

console.log(solution([3, 1, 2, 3])); //	2
console.log(solution([3, 3, 3, 2, 2, 4])); // 3
console.log(solution([3, 3, 3, 2, 2, 2])); // 2
