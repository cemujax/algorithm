/**
 * 핸드폰 번호 가리기
 *
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2018. 11. 21
 * @url     : https://programmers.co.kr/learn/courses/30/lessons/12948?language=javascript
 *
 */

function solution(phone_number) {
  const length = phone_number.length;
  const answer =
    "*".repeat(length - 4) + phone_number.substr(length - 4, length);
  return answer;
}

// console.log(solution("01033334444")); // *******4444
// console.log(solution("027778888")); // *****8888
