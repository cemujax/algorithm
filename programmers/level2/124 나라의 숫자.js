/**
 * 124 나라의 숫자
 *
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2018. 12. 22
 * @url     : https://programmers.co.kr/learn/courses/30/lessons/12899?language=javascript
 *
 */

function solution(n) {
  let result = "";
  const arr = [4, 1, 2];

  while (n) {
    result = arr[n % 3] + result;
    n = Math.floor((n - 1) / 3);
  }
  return result;
}

console.log(solution(1)); //	1
console.log(solution(2)); //	2
console.log(solution(3)); //	4
console.log(solution(4)); //	11
