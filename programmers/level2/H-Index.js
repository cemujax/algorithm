/**
 * H-Index
 *
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2019. 05. 13
 * @url     : https://programmers.co.kr/learn/courses/30/lessons/42747?language=javascript
 *
 */

function solution(citations) {
  const length = citations.length;
  let answer = 0;

  citations.sort((a, b) => a - b);
  for (let i = 0; i < length; i++) {
    const small = Math.min(citations[i], length - i);
    answer = Math.max(answer, small);
  }
  return answer;
}

console.log(solution([3, 0, 6, 1, 5])); //3
