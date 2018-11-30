/**
 * 가운데 글자 가져오기
 *
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2018. 12. 01
 * @url     : https://programmers.co.kr/learn/courses/30/lessons/12903?language=javascript
 *
 */

function solution(s) {
  return s.substring((s.length - 1) / 2, s.length / 2 + 1);
}

console.log(solution("abcde")); // c
console.log(solution("qwer")); // we
