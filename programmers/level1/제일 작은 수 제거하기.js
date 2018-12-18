/**
 * 제일 작은 수 제거하기
 *
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2018. 12. 18
 * @url     : https://programmers.co.kr/learn/courses/30/lessons/12935?language=javascript
 *
 */

function solution(arr) {
  const min = Math.min(...arr);
  const answer = arr.filter(n => n !== min);
  return answer.length ? answer : [-1];
}

console.log(solution([4, 3, 2, 1])); //	[4,3,2]
console.log(solution([10])); // 	[-1]
