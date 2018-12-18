/**
 * 평균 구하기
 *
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2018. 12. 18
 * @url     : https://programmers.co.kr/learn/courses/30/lessons/12944?language=javascript
 *
 */

function solution(arr) {
  const sum = arr.reduce((a, b) => (b += a));
  console.log(sum);
  return sum / arr.length;
}

console.log(solution([1, 2, 3, 4])); //	2.5
console.log(solution([5, 5])); // 5
