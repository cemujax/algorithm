/**
 * K번째수
 *
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2019. 02. 28
 * @url     : https://programmers.co.kr/learn/courses/30/lessons/42748?language=javascript
 *
 */

function solution(array, commands) {
  const answer = commands.reduce((acc, v) => {
    const [i, j, k] = v;
    const arr = array
      .slice(i - 1, j) // 자르기
      .sort((a, b) => a - b); // 정렬

    acc.push(arr[k - 1]); // k번째
    return acc;
  }, []);

  return answer;
}

console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]])); // [5, 6, 3]
