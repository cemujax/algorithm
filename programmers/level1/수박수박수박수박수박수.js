/**
 * 수박수박수박수박수박수
 *
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2018. 11. 21
 * @url     : https://programmers.co.kr/learn/courses/30/lessons/12922?language=javascript
 *
 */

function solution(n) {
  const answer = "수박".repeat(n / 2 + 1).substr(0, n);
  return answer;
}

// console.log(solution(3)); // 수박수
// console.log(solution(4)); // 수박수박
