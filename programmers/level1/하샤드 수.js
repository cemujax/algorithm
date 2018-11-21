/**
 * 하샤드 수
 *
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2018. 11. 22
 * @url     : https://programmers.co.kr/learn/courses/30/lessons/12947?language=javascript
 *
 */

function solution(x) {
  // 자릿수합
  const sum = String(x)
    .split("")
    .reduce((acc, cur) => Number(acc) + Number(cur));
  return !(x % sum);
}

// console.log(solution(10)); // true
// console.log(solution(12)); // true
// console.log(solution(11)); // false
// console.log(solution(13)); // false
