/**
 * 프린턴
 * 내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 return 하도록 solution 함수를 작성해주세요.
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2019.10.09
 * @url     : https://programmers.co.kr/learn/courses/30/lessons/42587?language=javascript
 *
 */
function solution(priorities, location) {
  let answer = 0;
  priorities = priorities.map((priority, index) => {
    return { priority, index };
  });

  while (priorities.length > 0) {
    let J = priorities.shift();
    const checkPrior = priorities.filter(p => p.priority > J.priority);

    if (checkPrior.length > 0) {
      priorities.push(J);
    } else {
      answer++;
      if (J.index === location) return answer;
    }
  }

  return answer;
}

console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));
