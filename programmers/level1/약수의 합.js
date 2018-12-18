/**
 * 약수의 합
 *
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2018. 12. 18
 * @url     : https://programmers.co.kr/learn/courses/30/lessons/12928?language=javascript
 *
 */

function solution(n) {
  var answer = 0;
  var arr = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      arr.push(i);
    }
  }
  if (arr.length === 0) return answer;
  answer = arr.reduce((a, b) => (a += b));
  return answer;
}

console.log(solution(12)); //	28
console.log(solution(5)); // 6
