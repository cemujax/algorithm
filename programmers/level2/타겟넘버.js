/**
 * 타겟넘버
 *
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2019. 03. 02
 * @url     : https://programmers.co.kr/learn/courses/30/lessons/43165?language=javascript
 *
 */

function solution(numbers, target) {
  var answer = dfs(numbers, target, 0, 0);
  return answer;
}

function dfs(numbers, target, idx, sum) {
  if (idx === numbers.length) {
    return sum === target ? 1 : 0;
  }

  let ret = 0;

  ret += dfs(numbers, target, idx + 1, sum + numbers[idx]);
  ret += dfs(numbers, target, idx + 1, sum - numbers[idx]);

  return ret;
}

console.log(solution([1, 1, 1, 1, 1], 3)); //	5
