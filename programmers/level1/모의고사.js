/**
 * 모의고사
 *
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2019. 06. 02
 * @url     : https://programmers.co.kr/learn/courses/30/lessons/42840
 *
 */

function solution(answers) {
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
  ];
  const matches = Array(patterns.length).fill(0);

  for (let i = 0; i < answers.length; i++) {
    for (let j = 0; j < patterns.length; j++) {
      if (answers[i] === patterns[j][i % patterns[j].length]) {
        matches[j]++;
      }
    }
  }
  const maxCount = Math.max(...matches);
  const answer = matches.reduce((acc, v, i) => {
    if (maxCount === v) {
      acc.push(i + 1);
    }
    return acc;
  }, []);

  return answer;
}

console.log(solution([1, 2, 3, 4, 5])); // [1]
console.log(solution([1, 3, 2, 4, 2])); // [1,2,3]
// 모두 틀린 case
console.log(solution([5, 5, 4, 5, 4])); // [1,2,3]
