/**
 * 예산
 * @version : 1.0
 * @author  : cemujax (cemujax@gmail.com)
 * @date    : 2019.12.01
 * @url     : https://programmers.co.kr/learn/courses/30/lessons/43237
 */
function solution(budgets, M) {
  budgets.sort((a, b) => a - b);
  let left = 0,
    right = budgets[budgets.length - 1];
  let answer = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let total = budgets.reduce((acc, budget) => {
      if (budget >= mid) {
        return acc + mid;
      }
      return acc + budget;
    }, 0);

    if (total < M) {
      answer = Math.max(left, mid);
      left = mid + 1;
    } else if (total > M) {
      right = mid - 1;
    } else {
      return mid;
    }
  }

  return answer;
}

console.log(solution([120, 110, 140, 150], 485)); // 127
