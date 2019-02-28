/**
 * 가장 큰 수
 *
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2019. 02. 28
 * @url     : https://programmers.co.kr/learn/courses/30/lessons/42746?language=javascript
 *
 */

function solution(numbers) {
  const max = numbers
    .map(v => String(v))
    .sort((a, b) => Number(b + a) - Number(a + b)) // 큰 순서대로 정렬
    .join("");
  return max[0] === "0" ? "0" : max;
}

console.log(solution([6, 10, 2])); // "6210"
console.log(solution([3, 30, 34, 5, 9])); // "9534330"
console.log(solution([0, 0, 0])); // "0"
