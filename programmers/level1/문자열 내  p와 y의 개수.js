/**
 * 문자열 내 p와 y의 개수
 *
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2018. 12. 01
 * @url     : https://programmers.co.kr/learn/courses/30/lessons/12916?language=javascript
 *
 */

function solution(s) {
  return (s.match(/p/gi) || []).length === (s.match(/y/gi) || []).length;
}

console.log(solution("pPoooyY")); // true
console.log(solution("Pyy")); // false
