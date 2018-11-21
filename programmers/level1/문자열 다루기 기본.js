/**
 * 문자열 다루기 기본
 *
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2018. 11. 22
 * @url     : https://programmers.co.kr/learn/courses/30/lessons/12947?language=javascript
 *
 */

function solution(s) {
  return s.length === 4 || s.length === 6 ? !isNaN(s) : false;
}

console.log(solution("a234")); // false
console.log(solution("1234")); // true
