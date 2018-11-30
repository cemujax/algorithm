/**
 * 같은 숫자는 싫어
 *
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2018. 12. 01
 * @url     : https://programmers.co.kr/learn/courses/30/lessons/12906?language=javascript
 *
 */

function solution(arr) {
  const answer = arr.filter((v, i, arr) => v !== arr[i + 1]);
  return answer;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1])); // 	[1,3,0,1]
console.log(solution([4, 4, 4, 3, 3])); // [4,3]
